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

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.Batters;
import com.ssafy.db.entity.Pitchers;
import com.ssafy.db.repository.BaseballPlayerRepository;
import com.ssafy.db.repository.BatterRepository;
import com.ssafy.db.repository.PitcherRepository;
import com.ssafy.db.repository.PitcherRepositorySupport;

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

	static class Team {
		String teamName;
		ArrayList<Batters> batters;
		ArrayList<Pitchers> pitchers;
		ArrayList<String> batSide;
		ArrayList<String> pitchSide;
		public Team(String teamName, ArrayList<Batters> batters, ArrayList<Pitchers> pitchers, ArrayList<String> batSide,
		ArrayList<String> pitchSide) {
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
			for(int i=0; i<team.batters.size(); i++) {
				this.batters[i] = team.batters.get(i);
				this.batSide[i] = team.batSide.get(i);
			}
			for(int i=0; i<team.pitchers.size(); i++) {
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
		if(batSide=="R") {
			pitcherRbi = pitcher.getRightRbi();
			pitcherInning = (double)pitcher.getRightOutNum()/3;
		}else {
			pitcherRbi = pitcher.getLeftRbi();
			pitcherInning = (double)pitcher.getLeftOutNum()/3;
		}
		if(pitchSide=="R") {
			batterAtBat = batter.getRightAtBatNum();
			batterSB = batter.getRightTwobHitNum();
			batterTB = batter.getRightThreebHitNum();
			batterHR = batter.getRightHrNum();
			batterH = batter.getRightHitNum();
			batterFB = batterH - batterSB - batterTB - batterHR;
			batterSO = batter.getRightSONum();
			batterGO = batter.getRightGONum();
			batterAO = batter.getRightAONum();
		}else {
			batterAtBat = batter.getLeftAtBatNum();
			batterSB = batter.getLeftTwobHitNum();
			batterTB = batter.getLeftThreebHitNum();
			batterHR = batter.getLeftHrNum();
			batterH = batter.getLeftHitNum();
			batterFB = batterH - batterSB - batterTB - batterHR;
			batterSO = batter.getLeftSONum();
			batterGO = batter.getLeftGONum();
			batterAO = batter.getLeftAONum();
		} 
		double res = Math.random();
		double factor = 2.2;
		if (res <= batterAtBat * (pitcherRbi*9/pitcherInning) * factor / 9) {
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

	static void simulate(int plays, PlayTeam homeTeam, PlayTeam awayTeam, boolean printlog, boolean resultlog) {
		for(int i=0; i<homeTeam.batters.length; i++) {
			System.out.println(awayTeam.batters[i].getName());
		}
		int homeWin = 0;
		int awayWin = 0;
		int draw = 0;
		int overtime = 12;
		StringBuilder gamelog = new StringBuilder();
		int[] gameResult = new int[7];
		for (int k = 0; k < plays; k++) {
			int gameInning = 0;
			int[][] ScoreRecord = new int[2][overtime];
			int[][] HitRecord = new int[2][overtime];
			int inningScore = 0;
			int inningHit = 0;
			for (int inning = 1; inning <= overtime; inning++) {
				Arrays.fill(awayTeam.base, false);
				Arrays.fill(homeTeam.base, false);
				inningScore = 0;
				inningHit = 0;
				for (int out = 0; out <= 2;) {
					gamelog.append(inning + "회초 " + out + "아웃 ");
					gamelog.append(getBaseStatus(awayTeam.base[1], awayTeam.base[2], awayTeam.base[3]) + "\n");
					gamelog.append((awayTeam.batterIndex + 1) + "번 타자 " + awayTeam.batters[awayTeam.batterIndex].getName()
							+ "의 타석: ");
					String result = getResult(awayTeam.nowBatter(), homeTeam.nowPitcher(), awayTeam.nowBatSide(), homeTeam.nowPitchSide());
					if (result == "SO" || result == "GO" || result == "AO") {
						if (result == "SO") {
							gamelog.append("삼진 아웃" + "\n");
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
						int runBattedIn = 0;
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
				ScoreRecord[0][inning - 1] = inningScore;
				inningHit = 0;
				inningScore = 0;
				gamelog.append("\n공수교대" + "\n");
				gamelog.append("공: " + homeTeam.team.teamName + " 수: " + awayTeam.team.teamName + "\n");
				gamelog.append(awayTeam.team.teamName + " " + awayTeam.score + " : " + homeTeam.team.teamName + " "
						+ homeTeam.score + "\n");
				gamelog.append("\n");
				for (int out = 0; out <= 2;) {
					gamelog.append(inning + "회말 " + out + "아웃 ");
					gamelog.append(getBaseStatus(homeTeam.base[1], homeTeam.base[2], homeTeam.base[3]) + "\n");
					gamelog.append((homeTeam.batterIndex + 1) + "번 타자 " + homeTeam.batters[homeTeam.batterIndex].getName()
							+ "의 타석: ");
					String result = getResult(awayTeam.nowBatter(), homeTeam.nowPitcher(), awayTeam.nowBatSide(), homeTeam.nowPitchSide());
					if (result == "SO" || result == "GO" || result == "AO") {
						if (result == "SO") {
							gamelog.append("삼진 아웃" + "\n");
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
						int runBattedIn = 0;
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
				ScoreRecord[1][inning - 1] = inningScore;
				if (inning >= 9 && homeTeam.score != awayTeam.score) {
					gameInning = inning;
					break;
				} else if (inning >= overtime) {
					gameInning = inning;
					break;
				}
				gamelog.append("\n공수교대" + "\n");
				gamelog.append("공: " + awayTeam.team.teamName + " 수: " + homeTeam.team.teamName + "\n" + "\n");
				gamelog.append(awayTeam.team.teamName + " " + awayTeam.score + " : " + homeTeam.team.teamName + " "
						+ homeTeam.score + "\n");
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
			System.out.println("[" + WDL[homeResult] + "]" + homeTeam.team.teamName + " " + homeTeam.score + " : "
					+ awayTeam.team.teamName + " " + awayTeam.score + "[" + WDL[awayResult] + "] " + " (" + gameInning
					+ "이닝)");
			int diff = awayTeam.score - homeTeam.score;
			if (diff <= -11) {// -12 -11
				gameResult[0]++;
			} else if (diff <= -6) {// -10 -9 -8 -7 -6
				gameResult[1]++;
			} else if (diff <= -2) {// -5 -4 -3 -2
				gameResult[2]++;
			} else if (diff < 2) {// -1 0 1
				gameResult[3]++;
			} else if (diff < 6) {// 2 3 4 5
				gameResult[4]++;
			} else if (diff < 11) {// 6 7 8 9 10
				gameResult[5]++;
			} else {// 11 12
				gameResult[6]++;
			}

			awayTeam.score = 0;
			homeTeam.score = 0;
			awayTeam.batterIndex = 0;
			homeTeam.batterIndex = 0;
			awayTeam.pitcherIndex = 0;
			homeTeam.batterIndex = 0;
			Arrays.fill(awayTeam.pitch, (double) 0);
			Arrays.fill(homeTeam.pitch, (double) 0);
			gamelog = new StringBuilder();
		}
		if (resultlog) {
			System.out.println(homeTeam.team.teamName + " 대 " + awayTeam.team.teamName + " " + plays + "번 시뮬레이션 결과");
			System.out.println(homeTeam.team.teamName + " 승: " + homeWin);
			System.out.println(awayTeam.team.teamName + " 승: " + awayWin);
			System.out.println("무승부: " + draw + "\n");
			System.out.println("< 경기 결과 >");
			System.out.println("압     도: " + gameResult[0]);
			System.out.println("절대우세: " + gameResult[1]);
			System.out.println("우     세: " + gameResult[2]);
			System.out.println("백 중 세: " + gameResult[3]);
			System.out.println("열     세: " + gameResult[4]);
			System.out.println("절대열세: " + gameResult[5]);
			System.out.println("압     살: " + gameResult[6]);
		}
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
		int gamePK = 0;
		Calendar calendar = new GregorianCalendar();
		SimpleDateFormat SDF = new SimpleDateFormat("MM/dd/yyyy");
		
		String chkDate = SDF.format(calendar.getTime());		
		calendar.add(Calendar.DATE, -2);		
		chkDate = SDF.format(calendar.getTime());		
		System.out.println(chkDate);
		try {
			URL url = new URL("https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate="+chkDate+"&endDate="+chkDate); // fastAPI에서 호출
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();

			conn.setRequestMethod("GET"); // http 메서드
			conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
			conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

			// 서버로부터 데이터 읽어오기
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
			for(int i=0; i<games.length(); i++) {
				JSONObject game = games.getJSONObject(i);
				JSONObject teams = game.getJSONObject("teams");
				JSONObject away = teams.getJSONObject("away");
				JSONObject team = away.getJSONObject("team");
				int id = team.getInt("id");
				if(id == homeTeamUid || id == awayTeamUid) {
					gamePK = game.getInt("gamePk");
				}
			}
			System.out.println(date);
		} catch (Exception e) {
			System.out.println("경기 없음");
			return null;
		}
		
		try {
			URL url = new URL("https://statsapi.mlb.com/api/v1/game/"+gamePK+"/playByPlay"); // fastAPI에서 호출
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();

			conn.setRequestMethod("GET"); // http 메서드
			conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
			conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true
			
			// 서버로부터 데이터 읽어오기
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			StringBuilder sb = new StringBuilder();
			String line = null;
			while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
				sb.append(line);
			}
			JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
			JSONArray playsByInning = obj.getJSONArray("playsByInning");
			ArrayList<Integer> awayIdx = new ArrayList<>();
			ArrayList<Integer> homeIdx = new ArrayList<>();
			for(int i=0; i<playsByInning.length(); i++) {
				JSONObject playByInning = playsByInning.getJSONObject(i);
				JSONArray top = playByInning.getJSONArray("top");
				for(int j=0; j<top.length(); j++) {
					awayIdx.add(top.getInt(j));
				}
				JSONArray bottom = playByInning.getJSONArray("bottom");
				for(int j=0; j<bottom.length(); j++) {
					homeIdx.add(bottom.getInt(j));
				}
			}
			JSONArray allPlays = obj.getJSONArray("allPlays");
			for(int i=0; i<9; i++) {
				int playIdx = awayIdx.get(i);
				JSONObject play = allPlays.getJSONObject(playIdx);
				JSONObject matchup = play.getJSONObject("matchup");
				JSONObject batter = matchup.getJSONObject("batter");
				if(i==0) {
					JSONObject pitcher = matchup.getJSONObject("pitcher");
					int id = pitcher.getInt("id");
					homePitchers.add(id);
					homePitchersSeason.add(2022);
				}
				int id = batter.getInt("id");
				awayBatters.add(id);
				awayBattersSeason.add(2022);
			}
			
			for(int i=0; i<9; i++) {
				int playIdx = homeIdx.get(i);
				JSONObject play = allPlays.getJSONObject(playIdx);
				JSONObject matchup = play.getJSONObject("matchup");
				JSONObject batter = matchup.getJSONObject("batter");
				if(i==0) {
					JSONObject pitcher = matchup.getJSONObject("pitcher");
					int id = pitcher.getInt("id");
					awayPitchers.add(id);
					awayPitchersSeason.add(2022);
				}
				int id = batter.getInt("id");
				homeBatters.add(id);
				homeBattersSeason.add(2022);
			}
			System.out.println(homeBatters);
			System.out.println(awayBatters);
			System.out.println(homePitchers);
			System.out.println(awayPitchers);
			for(int i=0; i<9 ;i++) {
				System.out.println(awayBatters);
			}
			
//			Team homeTeam = new Team(teamName, batters, pitchers) 
//			Batters a = batterRepository.findByPlayerUid(110001);
//			System.out.println(a);
//			System.out.println(a.getName());
//			System.out.println(a.getName());
		} catch (Exception e) {
			return null;
		}
		
		ArrayList<Batters> homeBattersArray = new ArrayList<>();
		ArrayList<Batters> awayBattersArray = new ArrayList<>();
		ArrayList<Pitchers> homePitchersArray= new ArrayList<>();
		ArrayList<Pitchers> awayPitchersArray= new ArrayList<>();
		ArrayList<String> awayPitchSide= new ArrayList<>();
		ArrayList<String> homePitchSide= new ArrayList<>();
		ArrayList<String> awayBatSide= new ArrayList<>();
		ArrayList<String> homeBatSide= new ArrayList<>();
		for(int i=0; i<homeBatters.size(); i++) {
			homeBattersArray.add(batterRepository.findBySeasonAndPlayerUid(2022, homeBatters.get(i)));
			homeBatSide.add(baseballPlayerRepository.findById(homeBatters.get(i)).get().getBatSideCode());
		}
		for(int i=0; i<awayBatters.size(); i++) {
			awayBattersArray.add(batterRepository.findBySeasonAndPlayerUid(2022, awayBatters.get(i)));
			awayBatSide.add(baseballPlayerRepository.findById(awayBatters.get(i)).get().getBatSideCode());
		}
		System.out.println("asdf");
		for(int i=0; i<homePitchers.size(); i++) {
			System.out.println(homePitchers.get(i));
			homePitchersArray.add(pitcherRepository.findBySeasonAndPlayerUid(2022, homePitchers.get(i)));
			System.out.println(homePitchers.get(i));
			homePitchSide.add(baseballPlayerRepository.findById(homePitchers.get(i)).get().getPitchHandCode());
		}
		System.out.println("safa");
		for(int i=0; i<awayPitchers.size(); i++) {
			awayPitchersArray.add(pitcherRepository.findBySeasonAndPlayerUid(2022, awayPitchers.get(i)));
			awayPitchSide.add(baseballPlayerRepository.findById(awayPitchers.get(i)).get().getPitchHandCode());
		}
		System.out.println("safa");
		System.out.println(homeBattersArray);
		System.out.println(homePitchersArray);
		System.out.println(homePitchSide);
		System.out.println(homeBatSide);
		
		Team home = new Team("home", homeBattersArray, homePitchersArray, homeBatSide, homePitchSide);
		Team away = new Team("away", awayBattersArray, awayPitchersArray, awayBatSide, awayPitchSide);
		PlayTeam homeTeam = new PlayTeam(home);
		PlayTeam awayTeam = new PlayTeam(away);
		simulate(1, homeTeam, awayTeam, true, true);
		return gamePK+"";
		
		//
//		Team home = new Team(teamName, batters, pitchers);
	}

}