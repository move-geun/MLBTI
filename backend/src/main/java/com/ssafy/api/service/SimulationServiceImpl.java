/**
 * 
 */
package com.ssafy.api.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Random;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.ssafy.db.entity.BaseballPlayers;
import com.ssafy.db.entity.Batters;
import com.ssafy.db.entity.Pitchers;
import com.ssafy.db.entity.SimulGameDatas;
import com.ssafy.db.entity.SimulGameInning;
import com.ssafy.db.entity.SimulGames;
import com.ssafy.db.entity.UserTeams;
import com.ssafy.db.entity.Users;
import com.ssafy.db.repository.BaseballPlayerRepository;
import com.ssafy.db.repository.BatterRepository;
import com.ssafy.db.repository.PitcherRepository;
import com.ssafy.db.repository.PitcherRepositorySupport;
import com.ssafy.db.repository.TeamRepository;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.UserTeamRepository;

/**
 * 
 * @FileName : SimulationService.java
 * @Project : mlb-analysis-project
 * @Date : 2022. 9. 22
 * @작성자 : 박찬호
 * @변경이력 :
 * @프로그램 설명 :
 */
@Service("simulationService")
public class SimulationServiceImpl implements SimulationService {
	@Autowired
	private BatterRepository batterRepository;
	@Autowired
	private PitcherRepository pitcherRepository;
	@Autowired
	private PitcherRepositorySupport pitcherRepositorySupport;
	@Autowired
	private BaseballPlayerRepository baseballPlayerRepository;
	@Autowired
	private TeamRepository teamRepository;
	@Autowired
	private UserTeamRepository userTeamRepository;
	@Autowired
	private UserRepository userRepository;

	static HashMap<String, String> map = new HashMap<>();
	static {
		map.put("1B", "1루타");
		map.put("2B", "2루타");
		map.put("3B", "3루타");
		map.put("HR", "홈런");
		map.put("SO", "삼진 아웃");
		map.put("GO", "땅볼 아웃");
		map.put("AO", "뜬공 아웃");
	}

	static class Team {
		String teamName;
		ArrayList<Batters> batters;
		ArrayList<Pitchers> pitchers;
		ArrayList<String> batSide;
		ArrayList<String> pitchSide;

		public Team(String teamName, ArrayList<Batters> batters, ArrayList<Pitchers> pitchers,
				ArrayList<String> batSide, ArrayList<String> pitchSide) {
			super();
			this.teamName = teamName;
			this.batters = (ArrayList<Batters>) batters.clone();
			this.pitchers = (ArrayList<Pitchers>) pitchers.clone();
			this.batSide = (ArrayList<String>) batSide.clone();
			this.pitchSide = (ArrayList<String>) pitchSide.clone();
		}
	}

	static class PlayTeam {
		Team team;
		int batterIndex = 0;
		int pitcherIndex = 0;
		Pitchers[] pitchers;
		String[] pitchSide;
		String[] batSide;
		double[] pitch;
		Batters[] batters;
		boolean[] base = new boolean[4];
		int score = 0;

		public PlayTeam(Team team) {
			super();
			pitchers = new Pitchers[team.pitchers.size()];
			pitchSide = new String[team.pitchSide.size()];
			batSide = new String[team.batSide.size()];
			batters = new Batters[team.batters.size()];
			pitch = new double[team.pitchers.size()];
			for (int i = 0; i < team.batters.size(); i++) {
				this.batters[i] = team.batters.get(i);
				this.batSide[i] = team.batSide.get(i);
			}
			for (int i = 0; i < team.pitchers.size(); i++) {
				this.pitchers[i] = team.pitchers.get(i);
				this.pitchSide[i] = team.pitchSide.get(i);
			}
		}

		public void nextBatter() {
			this.batterIndex = (this.batterIndex + 1) % 9;
		}

		public void nextPitcher() {
			this.pitcherIndex = (this.pitcherIndex + 1) % 1;
		}

		public Batters nowBatter() {
			return batters[batterIndex];
		}

		public Pitchers nowPitcher() {
			return pitchers[pitcherIndex];
		}

		public String nowBatSide() {
			return batSide[batterIndex];
		}

		public String nowPitchSide() {
			return pitchSide[pitcherIndex];
		}

	}

	static String getBaseStatus(boolean FB, boolean SB, boolean TB) {
		if (FB) {
			if (SB) {
				if (TB) {
					return "주자 만루";
				} else {
					return "주자 1,2루";
				}
			} else {
				if (TB) {
					return "주자 1,3루";
				} else {
					return "주자 1루";
				}
			}
		} else {
			if (SB) {
				if (TB) {
					return "주자 2,3루";
				} else {
					return "주자 2루";
				}
			} else {
				if (TB) {
					return "주자 3루";
				} else {
					return "주자 없음";
				}
			}
		}
	}

	static String getResult(Batters batter, Pitchers pitcher, String batSide, String pitchSide) {
		int batterAtBat, batterFB, batterSB, batterTB, batterHR, batterH, batterSO, batterGO, batterAO;
		int pitcherRbi;
		double pitcherInning;
		if (batSide == "R") {
			pitcherRbi = pitcher.getRightRbi();
			pitcherInning = (double) pitcher.getRightOutNum() / 3;
		} else {
			pitcherRbi = pitcher.getLeftRbi();
			pitcherInning = (double) pitcher.getLeftOutNum() / 3;
		}
		if (pitchSide == "R") {
			batterSB = batter.getRightTwobHitNum();
			batterTB = batter.getRightThreebHitNum();
			batterHR = batter.getRightHrNum();
			batterH = batter.getRightHitNum();
			batterFB = batterH - batterSB - batterTB - batterHR;
			batterSO = batter.getRightSoNum();
			batterGO = batter.getRightGoNum();
			batterAO = batter.getRightAoNum();
			batterAtBat = batterH + batterSO + batterGO + batterAO;
		} else {
			batterSB = batter.getLeftTwobHitNum();
			batterTB = batter.getLeftThreebHitNum();
			batterHR = batter.getLeftHrNum();
			batterH = batter.getLeftHitNum();
			batterFB = batterH - batterSB - batterTB - batterHR;
			batterSO = batter.getLeftSoNum();
			batterGO = batter.getLeftGoNum();
			batterAO = batter.getLeftAoNum();
			batterAtBat = batterH + batterSO + batterGO + batterAO;
		}
		double res = Math.random();
//		double factor = 2;
		double factor = 1.75;
		if (res <= ((double) batterH / batterAtBat) * ((double) pitcherRbi * 9 / pitcherInning) * factor / 9) {
			res = Math.random();
			double fb = batterFB / (double) batterH;
			double sb = fb + batterSB / (double) batterH;
			double tb = sb + batterTB / (double) batterH;
			if (res <= fb) {
				return "1B";
			} else if (res <= sb) {
				return "2B";
			} else if (res <= tb) {
				return "3B";
			} else {
				return "HR";
			}
		} else {
			int out = batterSO + batterGO + batterAO;
			res = Math.random();
			double so = batterSO / (double) out;
			double go = so + batterGO / (double) out;
			if (res <= so) {
				return "SO";
			} else if (res <= go) {
				return "GO";
			} else {
				return "AO";
			}

		}
	}

	static String simulate(int plays, PlayTeam homeTeam, PlayTeam awayTeam, String homeName, String awayName,
			boolean printlog, boolean resultlog) {
		System.out.println(homeName + " vs " + awayName);
		SimulGames res = new SimulGames();
		res.setGamePk(554135);
		res.setAwayName(homeName);
		res.setHomeName(awayName);
		res.setSeason(2022);
		res.setVenueName("Globe Life Field");
		Random random = new Random();
		res.setWeatherTemp(random.nextInt(5) + 18);
		res.setWeatherWind(random.nextInt(50) / (float) 10 + "m/h");
		Integer[][] scoreBoard = new Integer[2][14];

		SimulGameInning[] innings = res.getInngings();
		for (int i = 0; i < 24; i++) {
			innings[i] = new SimulGameInning();
		}
		int homeWin = 0;
		int awayWin = 0;
		int draw = 0;
		int overtime = 12;
		StringBuilder gamelog = new StringBuilder();
		int[] gameResult = new int[7];
		random = new Random();
		for (int k = 0; k < plays; k++) {
			int gameInning = 0;
			int[][] ScoreRecord = new int[2][overtime];
			int[][] HitRecord = new int[2][overtime];
			int inningScore = 0;
			int inningHit = 0;
			int homeHit = 0;
			int awayHit = 0;
			int inningIdx = 0;
			int runBattedIn = 0;
			for (int inning = 1; inning <= overtime; inning++) {
				Arrays.fill(awayTeam.base, false);
				Arrays.fill(homeTeam.base, false);
				inningScore = 0;
				inningHit = 0;
				inningIdx = 0;
				SimulGameInning temp = res.getInngings()[inning * 2 - 2];
				for (int out = 0; out <= 2;) {
					gamelog.append(inning + "회초 " + out + "아웃 ");
					gamelog.append(getBaseStatus(awayTeam.base[1], awayTeam.base[2], awayTeam.base[3]) + "\n");
					gamelog.append((awayTeam.batterIndex + 1) + "번 타자 "
							+ awayTeam.batters[awayTeam.batterIndex].getName() + "의 타석: ");
					SimulGameDatas e = new SimulGameDatas();
					e.setBatSide(awayTeam.nowBatSide());
					e.setBatterName(awayTeam.nowBatter().getName());
					e.setFirstBase(awayTeam.base[1]);
					e.setSecondBase(awayTeam.base[2]);
					e.setThirdBase(awayTeam.base[3]);
					e.setIndex(inningIdx);
					inningIdx++;
					e.setStrikeCount(random.nextInt(3));
					e.setBallCount(random.nextInt(4));
					e.setInning(inning);
					e.setOutCount(out);
					e.setPitcherName(homeTeam.nowPitcher().getName());

					String result = getResult(awayTeam.nowBatter(), homeTeam.nowPitcher(), awayTeam.nowBatSide(),
							homeTeam.nowPitchSide());
					if (result == "SO" || result == "GO" || result == "AO") {
						if (result == "SO") {
							gamelog.append("삼진 아웃" + "\n");
							e.setStrikeCount(2);
						} else if (result == "GO") {
							if (awayTeam.base[1] && out <= 1) {
								awayTeam.base[1] = false;
								out++;
								gamelog.append("병살타" + "\n");
							} else {
								gamelog.append("땅볼 아웃" + "\n");
							}
						} else {
							if (out < 2 && awayTeam.base[3]) {
								awayTeam.base[3] = false;
								awayTeam.score++;
								inningScore++;
								gamelog.append("희생플라이" + "\n"); // 성공확률, 시도확률
							} else {
								gamelog.append("뜬공 아웃" + "\n");
							}
						}
						out++;
						if (out >= 3) {
							Arrays.fill(awayTeam.base, false);
						}
					} else {
						runBattedIn = 0;
						inningHit++;
						if (result == "1B") {
							if (awayTeam.base[3]) {
								runBattedIn++;
								awayTeam.base[3] = false;
							}
							if (awayTeam.base[2]) {
								runBattedIn++;
								awayTeam.base[2] = false;
							}
							if (awayTeam.base[1]) {
								awayTeam.base[1] = false;
								awayTeam.base[3] = true;
							}
							awayTeam.base[1] = true;
							if (runBattedIn > 0) {
								gamelog.append(runBattedIn + "타점 ");
							}
							gamelog.append("1루타" + "\n");
						} else if (result == "2B") {
							if (awayTeam.base[3]) {
								runBattedIn++;
								awayTeam.base[3] = false;
							}
							if (awayTeam.base[2]) {
								runBattedIn++;
								awayTeam.base[2] = false;
							}
							if (awayTeam.base[1]) {
								runBattedIn++;
								awayTeam.base[1] = false;
							}
							awayTeam.base[2] = true;
							if (runBattedIn > 0) {
								gamelog.append(runBattedIn + "타점 ");
							}
							gamelog.append("2루타" + "\n");
						} else if (result == "3B") {
							if (awayTeam.base[3]) {
								runBattedIn++;
								awayTeam.base[3] = false;
							}
							if (awayTeam.base[2]) {
								runBattedIn++;
								awayTeam.base[2] = false;
							}
							if (awayTeam.base[1]) {
								runBattedIn++;
								awayTeam.base[1] = false;
							}
							awayTeam.base[3] = true;
							if (runBattedIn > 0) {
								gamelog.append(runBattedIn + "타점 ");
							}
							gamelog.append("3루타" + "\n");
						} else {
							runBattedIn = 1;
							if (awayTeam.base[3]) {
								runBattedIn++;
							}
							if (awayTeam.base[2]) {
								runBattedIn++;
							}
							if (awayTeam.base[1]) {
								runBattedIn++;
							}
							Arrays.fill(awayTeam.base, false);
							gamelog.append(runBattedIn + "점 홈런" + "\n");
						}
						awayTeam.score += runBattedIn;
						inningScore += runBattedIn;
					}
					temp.setInning(inning);
					temp.setStatus("초");
					e.setEvent(map.get(result));
					e.setRbi(runBattedIn);
					temp.getDatas().add(e);
//					homeTeam.pitch[homeTeam.pitcherIndex] += (awayTeam.nowBatter().PdivPA
//							+ homeTeam.nowPitcher().NPdivOUT) / 2;
//					if (homeTeam.nowPitcher().NPdivG < homeTeam.pitch[homeTeam.pitcherIndex]) {
//						gamelog.append(homeTeam.pitcherIndex);
//						gamelog.append("투수교체 " + homeTeam.nowPitcher().name + "->");
//						homeTeam.nextPitcher();
//						gamelog.append(homeTeam.pitcherIndex);
//						gamelog.append(homeTeam.nowPitcher().name + "\n");
//					}
					awayTeam.nextBatter();
				}
				HitRecord[0][inning - 1] = inningHit;
				awayHit += inningHit;
				ScoreRecord[0][inning - 1] = inningScore;
				scoreBoard[0][inning - 1] = inningScore;

				inningHit = 0;
				inningScore = 0;
				gamelog.append("\n");
				temp = res.getInngings()[inning * 2 - 1];
				for (int out = 0; out <= 2;) {
					gamelog.append(inning + "회말 " + out + "아웃 ");
					gamelog.append(getBaseStatus(homeTeam.base[1], homeTeam.base[2], homeTeam.base[3]) + "\n");
					gamelog.append((homeTeam.batterIndex + 1) + "번 타자 "
							+ homeTeam.batters[homeTeam.batterIndex].getName() + "의 타석: ");
					SimulGameDatas e = new SimulGameDatas();
					e.setBatSide(homeTeam.nowBatSide());
					e.setBatterName(homeTeam.nowBatter().getName());
					e.setFirstBase(homeTeam.base[1]);
					e.setSecondBase(homeTeam.base[2]);
					e.setThirdBase(homeTeam.base[3]);
					e.setIndex(inningIdx);
					inningIdx++;
					e.setStrikeCount(random.nextInt(3));
					e.setBallCount(random.nextInt(4));
					e.setInning(inning);
					e.setOutCount(out);
					e.setPitcherName(awayTeam.nowPitcher().getName());

					String result = getResult(homeTeam.nowBatter(), awayTeam.nowPitcher(), homeTeam.nowBatSide(),
							awayTeam.nowPitchSide());
					if (result == "SO" || result == "GO" || result == "AO") {
						if (result == "SO") {
							gamelog.append("삼진 아웃" + "\n");
							e.setStrikeCount(2);
						} else if (result == "GO") {
							if (homeTeam.base[1] && out <= 1) {
								homeTeam.base[1] = false;
								out++;
								gamelog.append("병살타" + "\n");
							} else {
								gamelog.append("땅볼 아웃" + "\n");
							}
						} else {
							if (out < 2 && homeTeam.base[3]) {
								homeTeam.base[3] = false;
								homeTeam.score++;
								inningScore++;
								gamelog.append("희생플라이" + "\n");
							} else {
								gamelog.append("뜬공 아웃" + "\n");
							}
						}
						out++;
						if (out >= 3) {
							Arrays.fill(homeTeam.base, false);
						}
					} else {
						runBattedIn = 0;
						inningHit++;
						if (result == "1B") {
							if (homeTeam.base[3]) {
								runBattedIn++;
								homeTeam.base[3] = false;
							}
							if (homeTeam.base[2]) {
								runBattedIn++;
								homeTeam.base[2] = false;
							}
							if (homeTeam.base[1]) {
								homeTeam.base[1] = false;
								homeTeam.base[3] = true;
							}
							homeTeam.base[1] = true;
							if (runBattedIn > 0) {
								gamelog.append(runBattedIn + "타점 ");
							}
							gamelog.append("1루타" + "\n");
						} else if (result == "2B") {
							if (homeTeam.base[3]) {
								runBattedIn++;
								homeTeam.base[3] = false;
							}
							if (homeTeam.base[2]) {
								runBattedIn++;
								homeTeam.base[2] = false;
							}
							if (homeTeam.base[1]) {
								runBattedIn++;
								homeTeam.base[1] = false;
							}
							homeTeam.base[2] = true;
							if (runBattedIn > 0) {
								gamelog.append(runBattedIn + "타점 ");
							}
							gamelog.append("2루타" + "\n");
						} else if (result == "3B") {
							if (homeTeam.base[3]) {
								runBattedIn++;
								homeTeam.base[3] = false;
							}
							if (homeTeam.base[2]) {
								runBattedIn++;
								homeTeam.base[2] = false;
							}
							if (homeTeam.base[1]) {
								runBattedIn++;
								homeTeam.base[1] = false;
							}
							homeTeam.base[3] = true;
							if (runBattedIn > 0) {
								gamelog.append(runBattedIn + "타점 ");
							}
							gamelog.append("3루타" + "\n");
						} else {
							runBattedIn = 1;
							if (homeTeam.base[3]) {
								runBattedIn++;
							}
							if (homeTeam.base[2]) {
								runBattedIn++;
							}
							if (homeTeam.base[1]) {
								runBattedIn++;
							}
							Arrays.fill(homeTeam.base, false);
							gamelog.append(runBattedIn + "점 홈런" + "\n");
						}
						inningScore += runBattedIn;
						homeTeam.score += runBattedIn;
					}
					temp.setInning(inning);
					temp.setStatus("말");
					e.setEvent(map.get(result));
					e.setRbi(runBattedIn);
					temp.getDatas().add(e);
//					awayTeam.pitch[awayTeam.pitcherIndex] += (homeTeam.nowBatter().PdivPA
//							+ awayTeam.nowPitcher().NPdivOUT) / 2;
//					if (awayTeam.nowPitcher().NPdivG < awayTeam.pitch[awayTeam.pitcherIndex]) {
//						gamelog.append(awayTeam.pitcherIndex);
//						gamelog.append("투수교체 " + awayTeam.nowPitcher().name + "->");
//						awayTeam.nextPitcher();
//						gamelog.append(awayTeam.pitcherIndex);
//						gamelog.append(awayTeam.nowPitcher().name + "\n");
//					}
					homeTeam.nextBatter();
				}
				HitRecord[1][inning - 1] = inningHit;
				homeHit += inningHit;
				ScoreRecord[1][inning - 1] = inningScore;
				scoreBoard[1][inning - 1] = inningScore;

				if (inning >= 9 && homeTeam.score != awayTeam.score) {
					gameInning = inning;
					break;
				} else if (inning >= overtime) {
					gameInning = inning;
					break;
				}
				gamelog.append("\n");
			}
			int homeResult = 0;
			int awayResult = 0;
			if (homeTeam.score > awayTeam.score) {
				homeWin++;
				homeResult = 0;
				awayResult = 2;
			} else if (homeTeam.score < awayTeam.score) {
				awayWin++;
				homeResult = 2;
				awayResult = 0;
			} else {
				draw++;
				homeResult = 1;
				awayResult = 1;
			}
			String[] WDL = new String[] { "승", "무", "패" };
			if (printlog) {
				System.out.println(gamelog);
			}

			scoreBoard[0][12] = awayTeam.score;
			scoreBoard[1][12] = homeTeam.score;
			awayTeam.score = 0;
			homeTeam.score = 0;
			awayTeam.batterIndex = 0;
			homeTeam.batterIndex = 0;
			awayTeam.pitcherIndex = 0;
			homeTeam.batterIndex = 0;
			Arrays.fill(awayTeam.pitch, (double) 0);
			Arrays.fill(homeTeam.pitch, (double) 0);
			gamelog = new StringBuilder();
			scoreBoard[0][13] = awayHit;
			scoreBoard[1][13] = homeHit;
		}
		System.out.println(homeWin);
		System.out.println(homeName + " 승리 확률: " + (double) homeWin / plays * 100 + "%");
		System.out.println("무승부 확률: " + (double) draw / plays * 100 + "%");
		System.out.println(awayName + " 승리 확률: " + (double) awayWin / plays * 100 + "%");
		res.setScoreBoard(scoreBoard);
		Gson gson = new Gson();
		String json = gson.toJson(res);
		return json;

	}

	@Override
	public String getNormalSim(int homeTeamUid, int awayTeamUid) {
		ArrayList<Integer> homeBatters = new ArrayList<>();
		ArrayList<Integer> awayBatters = new ArrayList<>();
		ArrayList<Integer> homePitchers = new ArrayList<>();
		ArrayList<Integer> awayPitchers = new ArrayList<>();
		ArrayList<Integer> homeBattersSeason = new ArrayList<>();
		ArrayList<Integer> awayBattersSeason = new ArrayList<>();
		ArrayList<Integer> homePitchersSeason = new ArrayList<>();
		ArrayList<Integer> awayPitchersSeason = new ArrayList<>();
		int homeGamePK = 0;
		int awayGamePK = 0;
		Calendar calendar = new GregorianCalendar();
		SimpleDateFormat SDF = new SimpleDateFormat("MM/dd/yyyy");

		String chkDate = SDF.format(calendar.getTime());
		calendar.add(Calendar.DATE, -8);
		chkDate = SDF.format(calendar.getTime());
		System.out.println(chkDate);
		String homeName = "";
		String awayName = "";
		String homeTopBottom = "";
		String awayTopBottom = "";
		try {
			URL url = new URL(
					"https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=" + chkDate + "&endDate=" + chkDate); // fastAPI에서
																														// 호출
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET"); // http 메서드
			conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
			conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			StringBuilder sb = new StringBuilder();
			String line = null;

			while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line);
			}
			JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
			JSONArray dates = obj.getJSONArray("dates");
			JSONObject date = dates.getJSONObject(0);
			JSONArray games = date.getJSONArray("games");
			for (int i = 0; i < games.length(); i++) {
				JSONObject game = games.getJSONObject(i);
				JSONObject teams = game.getJSONObject("teams");
				JSONObject away = teams.getJSONObject("away");
				JSONObject home = teams.getJSONObject("home");
				JSONObject awayteam = away.getJSONObject("team");
				JSONObject hometeam = home.getJSONObject("team");
				int homeId = hometeam.getInt("id");
				int awayId = awayteam.getInt("id");
				if (homeId == homeTeamUid) {
					homeGamePK = game.getInt("gamePk");
					homeName = hometeam.getString("name");
					homeTopBottom = "bottom";
					System.out.println(homeName);
					System.out.println(homeGamePK);
				} else if (awayId == homeTeamUid) {
					homeGamePK = game.getInt("gamePk");
					homeName = awayteam.getString("name");
					homeTopBottom = "top";
				}
				if (homeId == awayTeamUid) {
					awayGamePK = game.getInt("gamePk");
					awayName = hometeam.getString("name");
					awayTopBottom = "bottom";
				} else if (awayId == awayTeamUid) {
					awayGamePK = game.getInt("gamePk");
					awayName = awayteam.getString("name");
					awayTopBottom = "top";
				}
			}
			System.out.println(date);
		} catch (Exception e) {
			System.out.println("경기 없음");
			return null;
		}
		try {
			URL url = new URL("https://statsapi.mlb.com/api/v1/game/" + homeGamePK + "/playByPlay"); // fastAPI에서 호출
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET"); // http 메서드
			conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
			conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			StringBuilder sb = new StringBuilder();
			String line = null;
			while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line);
			}
			JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
			System.out.println(obj);
			JSONArray playsByInning = obj.getJSONArray("playsByInning");
			ArrayList<Integer> homeIdx = new ArrayList<>();
			ArrayList<Integer> awayIdx = new ArrayList<>();
			for (int i = 0; i < playsByInning.length(); i++) {
				JSONObject playByInning = playsByInning.getJSONObject(i);
				JSONArray top = playByInning.getJSONArray("top");
				for (int j = 0; j < top.length(); j++) {
					awayIdx.add(top.getInt(j));
				}
				JSONArray bottom = playByInning.getJSONArray("bottom");
				for (int j = 0; j < bottom.length(); j++) {
					homeIdx.add(bottom.getInt(j));
				}
			}
			JSONArray allPlays = obj.getJSONArray("allPlays");
			if (homeTopBottom.equals("top")) {
				for (int i = 0; i < 9; i++) {
					int playIdx = awayIdx.get(i);
					JSONObject play = allPlays.getJSONObject(playIdx);
					JSONObject matchup = play.getJSONObject("matchup");
					JSONObject batter = matchup.getJSONObject("batter");
					int id = batter.getInt("id");
					homeBatters.add(id);
					homeBattersSeason.add(2022);
				}
				int playIdx = homeIdx.get(0);
				JSONObject play = allPlays.getJSONObject(playIdx);
				JSONObject matchup = play.getJSONObject("matchup");
				JSONObject pitcher = matchup.getJSONObject("pitcher");
				int id = pitcher.getInt("id");
				homePitchers.add(id);
				homePitchersSeason.add(2022);
			} else {
				for (int i = 0; i < 9; i++) {
					int playIdx = homeIdx.get(i);
					JSONObject play = allPlays.getJSONObject(playIdx);
					JSONObject matchup = play.getJSONObject("matchup");
					JSONObject batter = matchup.getJSONObject("batter");
					int id = batter.getInt("id");
					homeBatters.add(id);
					homeBattersSeason.add(2022);
				}
				int playIdx = awayIdx.get(0);
				JSONObject play = allPlays.getJSONObject(playIdx);
				JSONObject matchup = play.getJSONObject("matchup");
				JSONObject pitcher = matchup.getJSONObject("pitcher");
				int id = pitcher.getInt("id");
				homePitchers.add(id);
				homePitchersSeason.add(2022);
			}
		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
		try {
			URL url = new URL("https://statsapi.mlb.com/api/v1/game/" + awayGamePK + "/playByPlay"); // fastAPI에서 호출
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();

			conn.setRequestMethod("GET"); // http 메서드
			conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
			conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			StringBuilder sb = new StringBuilder();
			String line = null;
			while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line);
			}
			JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
			JSONArray playsByInning = obj.getJSONArray("playsByInning");
			ArrayList<Integer> homeIdx = new ArrayList<>();
			ArrayList<Integer> awayIdx = new ArrayList<>();
			for (int i = 0; i < playsByInning.length(); i++) {
				JSONObject playByInning = playsByInning.getJSONObject(i);
				JSONArray top = playByInning.getJSONArray("top");
				for (int j = 0; j < top.length(); j++) {
					awayIdx.add(top.getInt(j));
				}
				JSONArray bottom = playByInning.getJSONArray("bottom");
				for (int j = 0; j < bottom.length(); j++) {
					homeIdx.add(bottom.getInt(j));
				}
			}
			JSONArray allPlays = obj.getJSONArray("allPlays");
			if (awayTopBottom.equals("top")) {
				for (int i = 0; i < 9; i++) {
					int playIdx = awayIdx.get(i);
					JSONObject play = allPlays.getJSONObject(playIdx);
					JSONObject matchup = play.getJSONObject("matchup");
					JSONObject batter = matchup.getJSONObject("batter");
					int id = batter.getInt("id");
					awayBatters.add(id);
					awayBattersSeason.add(2022);
				}
				int playIdx = homeIdx.get(0);
				JSONObject play = allPlays.getJSONObject(playIdx);
				JSONObject matchup = play.getJSONObject("matchup");
				JSONObject pitcher = matchup.getJSONObject("pitcher");
				int id = pitcher.getInt("id");
				awayPitchers.add(id);
				awayPitchersSeason.add(2022);
			} else {
				for (int i = 0; i < 9; i++) {
					int playIdx = homeIdx.get(i);
					JSONObject play = allPlays.getJSONObject(playIdx);
					JSONObject matchup = play.getJSONObject("matchup");
					JSONObject batter = matchup.getJSONObject("batter");
					int id = batter.getInt("id");
					awayBatters.add(id);
					awayBattersSeason.add(2022);
				}
				int playIdx = awayIdx.get(0);
				JSONObject play = allPlays.getJSONObject(playIdx);
				JSONObject matchup = play.getJSONObject("matchup");
				JSONObject pitcher = matchup.getJSONObject("pitcher");
				int id = pitcher.getInt("id");
				awayPitchers.add(id);
				awayPitchersSeason.add(2022);
			}
		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
		ArrayList<Batters> homeBattersArray = new ArrayList<>();
		ArrayList<Batters> awayBattersArray = new ArrayList<>();
		ArrayList<Pitchers> homePitchersArray = new ArrayList<>();
		ArrayList<Pitchers> awayPitchersArray = new ArrayList<>();
		ArrayList<String> awayPitchSide = new ArrayList<>();
		ArrayList<String> homePitchSide = new ArrayList<>();
		ArrayList<String> awayBatSide = new ArrayList<>();
		ArrayList<String> homeBatSide = new ArrayList<>();
		for (int i = 0; i < homeBatters.size(); i++) {
			homeBattersArray.add(batterRepository.findBySeasonAndPlayerUidAndTeamName(2022, homeBatters.get(i), homeName));
			homeBatSide.add(baseballPlayerRepository.findById(homeBatters.get(i)).get().getBatSideCode());
		}
		for (int i = 0; i < awayBatters.size(); i++) {
			awayBattersArray.add(batterRepository.findBySeasonAndPlayerUidAndTeamName(2022, awayBatters.get(i), awayName));
			awayBatSide.add(baseballPlayerRepository.findById(awayBatters.get(i)).get().getBatSideCode());
		}
		for (int i = 0; i < homePitchers.size(); i++) {
			System.out.println(homePitchers.get(i));
			homePitchersArray.add(pitcherRepository.findBySeasonAndPlayerUid(2022, homePitchers.get(i)));
			homePitchSide.add(baseballPlayerRepository.findById(homePitchers.get(i)).get().getPitchHandCode());
		}
		for (int i = 0; i < awayPitchers.size(); i++) {
			System.out.println(awayPitchers.get(i));
			awayPitchersArray.add(pitcherRepository.findBySeasonAndPlayerUid(2022, awayPitchers.get(i)));
			awayPitchSide.add(baseballPlayerRepository.findById(awayPitchers.get(i)).get().getPitchHandCode());
		}

		Team home = new Team(homeName, homeBattersArray, homePitchersArray, homeBatSide, homePitchSide);
		Team away = new Team(awayName, awayBattersArray, awayPitchersArray, awayBatSide, awayPitchSide);
		PlayTeam homeTeam = new PlayTeam(home);
		PlayTeam awayTeam = new PlayTeam(away);
		String result = simulate(1, homeTeam, awayTeam, homeName, awayName, true, true);
		return result;
	}

	@Override
	public String getCustomSim(String email, int teamUid) {
		ArrayList<Integer> homeBatters = new ArrayList<>();
		ArrayList<Integer> homePitchers = new ArrayList<>();
		ArrayList<Integer> homeBattersSeason = new ArrayList<>();
		ArrayList<Integer> homePitchersSeason = new ArrayList<>();
		ArrayList<Integer> awayBatters = new ArrayList<>();
		ArrayList<Integer> awayPitchers = new ArrayList<>();
		ArrayList<Integer> awayBattersSeason = new ArrayList<>();
		ArrayList<Integer> awayPitchersSeason = new ArrayList<>();
		ArrayList<String> homeBattersTeam = new ArrayList<>();
		ArrayList<String> homePitchersTeam = new ArrayList<>();
		int gamePK = 0;
		Calendar calendar = new GregorianCalendar();
		SimpleDateFormat SDF = new SimpleDateFormat("MM/dd/yyyy");

		String chkDate = SDF.format(calendar.getTime());
		String chkDate2 = SDF.format(calendar.getTime());
		chkDate2 = SDF.format(calendar.getTime());
		calendar.add(Calendar.DATE, -8);
		chkDate = SDF.format(calendar.getTime());
		String homeName = "";
		String awayName = "";
		try {
			URL url = new URL(
					"https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=" + chkDate + "&endDate=" + chkDate2); // fastAPI에서
																															// 호출
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();

			conn.setRequestMethod("GET"); // http 메서드
			conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
			conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			StringBuilder sb = new StringBuilder();
			String line = null;

			while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line);
			}
			JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
			JSONArray dates = obj.getJSONArray("dates");
			JSONObject date = dates.getJSONObject(0);
			JSONArray games = date.getJSONArray("games");
			for (int i = 0; i < games.length(); i++) {
				JSONObject game = games.getJSONObject(i);
				JSONObject teams = game.getJSONObject("teams");
				JSONObject away = teams.getJSONObject("away");
				JSONObject team = away.getJSONObject("team");
				int id = team.getInt("id");
				if (id == teamUid) {
					gamePK = game.getInt("gamePk");
					awayName = team.getString("name");
				}
				JSONObject home = teams.getJSONObject("home");
				team = home.getJSONObject("team");
				id = team.getInt("id");
				if (id == teamUid) {
					gamePK = game.getInt("gamePk");
					awayName = team.getString("name");
				}
			}
		} catch (Exception e) {
			System.out.println("경기 없음");
			return null;
		}
		boolean isAway = false;
		try {
			URL url = new URL("https://statsapi.mlb.com/api/v1.1/game/" + gamePK + "/feed/live"); // fastAPI에서 호출
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();

			conn.setRequestMethod("GET"); // http 메서드
			conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
			conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			StringBuilder sb = new StringBuilder();
			String line = null;
			while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line);
			}
			JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
			JSONObject gameData = obj.getJSONObject("gameData");
			JSONObject teams = gameData.getJSONObject("teams");
			JSONObject away = teams.getJSONObject("away");
			int awayId = away.getInt("id");
			if (awayId == teamUid) {
				isAway = true;
			}
		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
		try {
			URL url = new URL("https://statsapi.mlb.com/api/v1/game/" + gamePK + "/playByPlay"); // fastAPI에서 호출
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();

			conn.setRequestMethod("GET"); // http 메서드
			conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
			conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			StringBuilder sb = new StringBuilder();
			String line = null;
			while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line);
			}
			JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
			JSONArray playsByInning = obj.getJSONArray("playsByInning");
			ArrayList<Integer> topIdx = new ArrayList<>();
			ArrayList<Integer> bottomIdx = new ArrayList<>();
			for (int i = 0; i < playsByInning.length(); i++) {
				JSONObject playByInning = playsByInning.getJSONObject(i);
				JSONArray top = playByInning.getJSONArray("top");
				for (int j = 0; j < top.length(); j++) {
					topIdx.add(top.getInt(j));
				}
				JSONArray bottom = playByInning.getJSONArray("bottom");
				for (int j = 0; j < bottom.length(); j++) {
					bottomIdx.add(bottom.getInt(j));
				}
			}
			JSONArray allPlays = obj.getJSONArray("allPlays");
			if (isAway) {
				for (int i = 0; i < 9; i++) {
					System.out.println(i);
					int playIdx = topIdx.get(i);
					JSONObject play = allPlays.getJSONObject(playIdx);
					JSONObject matchup = play.getJSONObject("matchup");
					JSONObject batter = matchup.getJSONObject("batter");
					int id = batter.getInt("id");
					awayBatters.add(id);
					awayBattersSeason.add(2022);
				}
				int playIdx = bottomIdx.get(0);
				JSONObject play = allPlays.getJSONObject(playIdx);
				JSONObject matchup = play.getJSONObject("matchup");
				JSONObject pitcher = matchup.getJSONObject("pitcher");
				int id = pitcher.getInt("id");
				awayPitchers.add(id);
				awayPitchersSeason.add(2022);
			} else {
				for (int i = 0; i < 9; i++) {
					System.out.println(i);
					int playIdx = bottomIdx.get(i);
					JSONObject play = allPlays.getJSONObject(playIdx);
					JSONObject matchup = play.getJSONObject("matchup");
					JSONObject batter = matchup.getJSONObject("batter");
					int id = batter.getInt("id");
					awayBatters.add(id);
					awayBattersSeason.add(2022);
				}
				int playIdx = topIdx.get(0);
				JSONObject play = allPlays.getJSONObject(playIdx);
				JSONObject matchup = play.getJSONObject("matchup");
				JSONObject pitcher = matchup.getJSONObject("pitcher");
				int id = pitcher.getInt("id");
				awayPitchers.add(id);
				awayPitchersSeason.add(2022);
			}
		} catch (Exception e) {
			System.out.println(e);
			return null;
		}

//		ArrayList<Integer> homeBatters = new ArrayList<>();
//		ArrayList<Integer> homePitchers = new ArrayList<>();
//		ArrayList<Integer> homeBattersSeason = new ArrayList<>();
//		ArrayList<Integer> homePitchersSeason = new ArrayList<>();

		int userUid = userRepository.findByEmail(email).get().getUid();
		homeName = userRepository.findByEmail(email).get().getNickname();
		ArrayList<UserTeams> userteams = (ArrayList<UserTeams>) userTeamRepository.findAllByUserUid(userUid);
		int[] batterIdx = new int[9];
		int[] batterSeason = new int[9];
		String[] batterTeam = new String[9];
		int pitcherIdx = 0;
		int pitcherSeason = 0;
		String pitcherTeam = null;
		for (int i = 0; i < userteams.size(); i++) {
			System.out.println(userteams.get(i).getUid());
			System.out.println(userteams.get(i).getOrder());
			if (userteams.get(i).getOrder() >= 1 && userteams.get(i).getOrder() <= 9) {
				batterIdx[userteams.get(i).getOrder() - 1] = userteams.get(i).getBaseballPlayer().getUid();
				batterSeason[userteams.get(i).getOrder() - 1] = userteams.get(i).getSeason();
				batterTeam[userteams.get(i).getOrder() - 1] = userteams.get(i).getTeam();
			} else {
				if (userteams.get(i).getPosition().equals("P")) {
					pitcherIdx = userteams.get(i).getBaseballPlayer().getUid();
					pitcherSeason = userteams.get(i).getSeason();
					pitcherTeam = userteams.get(i).getTeam();
				}
			}
		}
		for (int i = 0; i < 9; i++) {
			homeBatters.add(batterIdx[i]);
			homeBattersSeason.add(batterSeason[i]);
			homeBattersTeam.add(batterTeam[i]);
		}
		homePitchers.add(pitcherIdx);
		homePitchersSeason.add(pitcherSeason);
		homePitchersTeam.add(pitcherTeam);
		ArrayList<Batters> homeBattersArray = new ArrayList<>();
		ArrayList<Batters> awayBattersArray = new ArrayList<>();
		ArrayList<Pitchers> homePitchersArray = new ArrayList<>();
		ArrayList<Pitchers> awayPitchersArray = new ArrayList<>();
		ArrayList<String> awayPitchSide = new ArrayList<>();
		ArrayList<String> homePitchSide = new ArrayList<>();
		ArrayList<String> awayBatSide = new ArrayList<>();
		ArrayList<String> homeBatSide = new ArrayList<>();
		for (int i = 0; i < homeBatters.size(); i++) {
			System.out.println(homeBatters.get(i));
			System.out.println(homeName);
			homeBattersArray.add(batterRepository.findBySeasonAndPlayerUidAndTeamName(homeBattersSeason.get(i), homeBatters.get(i), homeBattersTeam.get(i)));
			homeBatSide.add(baseballPlayerRepository.findById(homeBatters.get(i)).get().getBatSideCode());
		}
		for (int i = 0; i < awayBatters.size(); i++) {
			awayBattersArray.add(batterRepository.findBySeasonAndPlayerUidAndTeamName(2022, awayBatters.get(i), awayName));
			awayBatSide.add(baseballPlayerRepository.findById(awayBatters.get(i)).get().getBatSideCode());
		}
		for (int i = 0; i < homePitchers.size(); i++) {
			System.out.println(homePitchers.get(i));
			homePitchersArray.add(pitcherRepository.findBySeasonAndPlayerUidAndTeamName(homePitchersSeason.get(i), homePitchers.get(i), homePitchersTeam.get(i)));
			homePitchSide.add(baseballPlayerRepository.findById(homePitchers.get(i)).get().getPitchHandCode());
		}
		for (int i = 0; i < awayPitchers.size(); i++) {
			System.out.println(awayPitchers.get(i));
			awayPitchersArray.add(pitcherRepository.findBySeasonAndPlayerUidAndTeamName(2022, awayPitchers.get(i), awayName));
			awayPitchSide.add(baseballPlayerRepository.findById(awayPitchers.get(i)).get().getPitchHandCode());
		}
		System.out.println(homeBattersArray);
		Team home = new Team(homeName, homeBattersArray, homePitchersArray, homeBatSide, homePitchSide);
		Team away = new Team(awayName, awayBattersArray, awayPitchersArray, awayBatSide, awayPitchSide);
		PlayTeam homeTeam = new PlayTeam(home);
		PlayTeam awayTeam = new PlayTeam(away);
		String result = simulate(1, homeTeam, awayTeam, awayName, homeName, true, true);
		return result;
	}

	@Override
	public String getYesterdaySim() {
		ArrayList<Integer> homeBatters = new ArrayList<>();
		ArrayList<Integer> awayBatters = new ArrayList<>();
		ArrayList<Integer> homePitchers = new ArrayList<>();
		ArrayList<Integer> awayPitchers = new ArrayList<>();
		ArrayList<Integer> homeBattersSeason = new ArrayList<>();
		ArrayList<Integer> awayBattersSeason = new ArrayList<>();
		ArrayList<Integer> homePitchersSeason = new ArrayList<>();
		ArrayList<Integer> awayPitchersSeason = new ArrayList<>();
		int gamePK = 0;
		Calendar calendar = new GregorianCalendar();
		SimpleDateFormat SDF = new SimpleDateFormat("MM/dd/yyyy");

		String chkDate = SDF.format(calendar.getTime());
		calendar.add(Calendar.DATE, -4);
		chkDate = SDF.format(calendar.getTime());
		System.out.println(chkDate);
		String homeName = "";
		String awayName = "";
		String result = null;
		try {
			URL url = new URL(
					"https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=" + chkDate + "&endDate=" + chkDate); // fastAPI에서
																														// 호출
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET"); // http 메서드
			conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
			conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			StringBuilder sb = new StringBuilder();
			String line = null;

			while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line);
			}
			JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
			JSONArray dates = obj.getJSONArray("dates");
			JSONObject date = dates.getJSONObject(0);
			JSONArray games = date.getJSONArray("games");
			for (int i = 0; i < games.length(); i++) {
				JSONObject game = games.getJSONObject(i);
				JSONObject teams = game.getJSONObject("teams");
				JSONObject away = teams.getJSONObject("away");
				JSONObject home = teams.getJSONObject("home");
				JSONObject awayteam = away.getJSONObject("team");
				JSONObject hometeam = home.getJSONObject("team");
				int homeId = hometeam.getInt("id");
				int awayId = awayteam.getInt("id");
				gamePK = game.getInt("gamePk");
				System.out.println(gamePK);
				homeName = hometeam.getString("name");
				awayName = awayteam.getString("name");

				try {
					url = new URL("https://statsapi.mlb.com/api/v1/game/" + gamePK + "/playByPlay"); // fastAPI에서 호출
					conn = (HttpURLConnection) url.openConnection();
					conn.setRequestMethod("GET"); // http 메서드
					conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
					conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
					conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

					br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
					sb = new StringBuilder();
					line = null;
					while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
						sb.append(line);
					}
					obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
					JSONArray playsByInning = obj.getJSONArray("playsByInning");
					ArrayList<Integer> homeIdx = new ArrayList<>();
					ArrayList<Integer> awayIdx = new ArrayList<>();
					for (int k = 0; k < playsByInning.length(); k++) {
						JSONObject playByInning = playsByInning.getJSONObject(k);
						JSONArray top = playByInning.getJSONArray("top");
						for (int j = 0; j < top.length(); j++) {
							awayIdx.add(top.getInt(j));
						}
						JSONArray bottom = playByInning.getJSONArray("bottom");
						for (int j = 0; j < bottom.length(); j++) {
							homeIdx.add(bottom.getInt(j));
						}
					}
					JSONArray allPlays = obj.getJSONArray("allPlays");
					for (int k = 0; k < 9; k++) {
						int playIdx = awayIdx.get(k);
						JSONObject play = allPlays.getJSONObject(playIdx);
						JSONObject matchup = play.getJSONObject("matchup");
						JSONObject batter = matchup.getJSONObject("batter");
						int id = batter.getInt("id");
						awayBatters.add(id);
						awayBattersSeason.add(2022);
						if (k == 0) {
							JSONObject pitcher = matchup.getJSONObject("pitcher");
							id = pitcher.getInt("id");
							homePitchers.add(id);
							homePitchersSeason.add(2022);
						}
					}
					for (int k = 0; k < 9; k++) {
						int playIdx = homeIdx.get(k);
						JSONObject play = allPlays.getJSONObject(playIdx);
						JSONObject matchup = play.getJSONObject("matchup");
						JSONObject batter = matchup.getJSONObject("batter");
						int id = batter.getInt("id");
						homeBatters.add(id);
						homeBattersSeason.add(2022);
						if (k == 0) {
							JSONObject pitcher = matchup.getJSONObject("pitcher");
							id = pitcher.getInt("id");
							awayPitchers.add(id);
							awayPitchersSeason.add(2022);
						}
					}
				} catch (Exception e) {
					System.out.println(e);
					return null;
				}
				ArrayList<Batters> homeBattersArray = new ArrayList<>();
				ArrayList<Batters> awayBattersArray = new ArrayList<>();
				ArrayList<Pitchers> homePitchersArray = new ArrayList<>();
				ArrayList<Pitchers> awayPitchersArray = new ArrayList<>();
				ArrayList<String> awayPitchSide = new ArrayList<>();
				ArrayList<String> homePitchSide = new ArrayList<>();
				ArrayList<String> awayBatSide = new ArrayList<>();
				ArrayList<String> homeBatSide = new ArrayList<>();
				for (int l = 0; l < homeBatters.size(); l++) {
					homeBattersArray.add(batterRepository.findBySeasonAndPlayerUid(2022, homeBatters.get(l)));
					homeBatSide.add(baseballPlayerRepository.findById(homeBatters.get(l)).get().getBatSideCode());
				}
				for (int l = 0; l < awayBatters.size(); l++) {
					awayBattersArray.add(batterRepository.findBySeasonAndPlayerUid(2022, awayBatters.get(l)));
					awayBatSide.add(baseballPlayerRepository.findById(awayBatters.get(l)).get().getBatSideCode());
				}
				for (int l = 0; l < homePitchers.size(); l++) {
					homePitchersArray.add(pitcherRepository.findBySeasonAndPlayerUid(2022, homePitchers.get(l)));
					homePitchSide.add(baseballPlayerRepository.findById(homePitchers.get(l)).get().getPitchHandCode());
				}
				for (int l = 0; l < awayPitchers.size(); l++) {
					awayPitchersArray.add(pitcherRepository.findBySeasonAndPlayerUid(2022, awayPitchers.get(l)));
					awayPitchSide.add(baseballPlayerRepository.findById(awayPitchers.get(l)).get().getPitchHandCode());
				}

				Team homeT = new Team(homeName, homeBattersArray, homePitchersArray, homeBatSide, homePitchSide);
				Team awayT = new Team(awayName, awayBattersArray, awayPitchersArray, awayBatSide, awayPitchSide);
				PlayTeam homeTeam = new PlayTeam(homeT);
				PlayTeam awayTeam = new PlayTeam(awayT);
				result = simulate(1000, homeTeam, awayTeam, homeName, awayName, false, true);
//				System.out.println(result);

			}
		} catch (Exception e) {
			System.out.println("경기 없음");
			return null;
		}
		return null;
	}

}