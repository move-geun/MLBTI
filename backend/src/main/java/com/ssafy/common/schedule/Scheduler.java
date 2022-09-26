package com.ssafy.common.schedule;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.JsonObject;
import com.ssafy.db.entity.LiveGameDataPitchs;
import com.ssafy.db.entity.LiveGameDatas;
import com.ssafy.db.entity.LiveGames;
import com.ssafy.db.repository.LiveGameDataPitchsRepository;
import com.ssafy.db.repository.LiveGameDatasRepository;
import com.ssafy.db.repository.LiveGamesRepository;
@Component
public class Scheduler {
	@Autowired
	private LiveGamesRepository liveGamesRepository;
	@Autowired
	private LiveGameDatasRepository liveGameDatasRepository;
	@Autowired
	private LiveGameDataPitchsRepository liveGameDataPitchsRepository;
	
    @Scheduled(cron = "*/5 * * * * *")//5초마다 1번씩 실행
    @Transactional
    public void updateGames () {
//    	try {
//			URL url = new URL("http://j7e202.p.ssafy.io:8001/"); //fastAPI에서 호출
//			HttpURLConnection conn = (HttpURLConnection)url.openConnection();
//			
//			conn.setRequestMethod("GET"); // http 메서드
//			conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
//			conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
//			conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true
//			
//			// 서버로부터 데이터 읽어오기
//			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
//			StringBuilder sb = new StringBuilder();
//			String line = null;
//			
//			while((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
//				sb.append(line);
//			}
//			liveGamesRepository.truncateLiveGames();
//			liveGameDatasRepository.truncateLiveGameDatas();
//			liveGameDataPitchsRepository.truncateLiveGameDataPitchs();
//			JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
//			JSONArray games = obj.getJSONArray("games");
//			for(int i=0; i<games.length(); i++) {
//				JSONObject game = (JSONObject) games.get(i);
//				LiveGames liveGame = new LiveGames();
//				liveGame.setGamePk(game.getInt("gamePk"));
//				liveGame.setSeason(game.getInt("season"));
//				liveGame.setAmpm(game.getString("ampm"));
//				liveGame.setAbstarctGameState(game.getString("abstractGameState"));
//				liveGame.setDetailedState(game.getString("detailedState"));
//				liveGame.setAwayId(game.getInt("away_id"));
//				liveGame.setAwayName(game.getString("away_name"));
//				liveGame.setHomeId(game.getInt("home_id"));
//				liveGame.setHomeName(game.getString("home_name"));
//				liveGame.setLeagueId(game.getInt("league_id"));
//				liveGame.setLeagueName(game.getString("league_name"));
//				liveGame.setDivisionId(game.getInt("divison_id"));
//				liveGame.setDivisionName(game.getString("divison_name"));
//				liveGame.setVenueId(game.getInt("venue_id"));
//				liveGame.setVenueName(game.getString("venue_name"));
//				liveGame.setVenueTimeOffset(game.getInt("venue_time_offset"));
//				liveGame.setWeatherTemp(game.getInt("weather_temp"));
//				liveGame.setWeatherWind(game.getString("weather_wind"));
//				liveGamesRepository.save(liveGame);
//				JSONArray gameDatas = game.getJSONArray("gameData");
//				for(int j=0; j<24; j++) {
//					JSONArray gameDataArray = gameDatas.getJSONArray(j);
//					if(gameDataArray.length()==0) break;
//					for(int k=0; k<gameDataArray.length(); k++) {
//						JSONObject gameData = gameDataArray.getJSONObject(k);
//						LiveGameDatas LGD = new LiveGameDatas();
//						LGD.setEvent(gameData.getString("event"));
//						LGD.setEventType(gameData.getString("eventType"));
//						LGD.setDescription(gameData.getString("description"));
//						LGD.setRbi(gameData.getInt("rbi"));
//						LGD.setComplete(gameData.getBoolean("isComplete"));
//						//LGD.setBatterName(gameData.getString("batterName"));
//						LGD.setBatterId(gameData.getInt("batterId"));
//						LGD.setBatSide(gameData.getString("batSide"));
//						LGD.setPitcherName(gameData.getString("pitcherName"));
//						LGD.setPitcherId(gameData.getInt("pitcherId"));
//						LGD.setPitchHand(gameData.getString("pitchHand"));
//						LGD.setInning(j/2+1);
//						LGD.setHalf(j%2==0 ? "top" : "bottom");
//						LGD.setIndex(k);
//						LGD.setLive_gamePk(game.getInt("gamePk"));
//						LGD.setUid(Integer.parseInt(game.getInt("gamePk")+""+k));
//						liveGameDatasRepository.save(LGD);
//						JSONArray playEvents = gameData.getJSONArray("playEvents");
//						for(int l=0; l<playEvents.length(); l++) {
//							JSONObject gameDataPitch = playEvents.getJSONObject(l);
//							LiveGameDataPitchs LGDP = new LiveGameDataPitchs();
//							LGDP.setType(gameDataPitch.getString("type"));
//							LGDP.setDescription(gameDataPitch.getString("description"));
////							LGDP.setCode(gameDataPitch.getString("type"));
//							LGDP.setType(gameDataPitch.getString("type"));
//							LGDP.setType(gameDataPitch.getString("type"));
//						}
//					}
//				}
//			}
//				
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
    }
}