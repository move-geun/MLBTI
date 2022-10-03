package com.ssafy.api.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.dto.StartingPlayerDto;
import com.ssafy.db.entity.BaseballPlayers;

/**
* @FileName : BaseballPlayerServiceImpl.java
* @Date : 2022. 9. 20
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 선수 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
*/
@Service("startingPlayerService")
public class StartingPlayerServiceImpl implements StartingPlayerService{

	/**
	  * @Method Name : getStartingPlayerByApi
	  * @작성일 : 2022. 10. 3
	  * @작성자 : 김동우
	  * @변경이력 : 
	
	  * @Method 설명 :
	  * @param url
	  * @return
	  */
	
	@Override
	public List<StartingPlayerDto> getStartingPlayerByApi(String apiUrl) {
		try {
		URL url = new URL(apiUrl); //fastAPI에서 호출
		HttpURLConnection conn = (HttpURLConnection)url.openConnection();
		
		conn.setRequestMethod("GET"); // http 메서드
		conn.setRequestProperty("Content-Type", "application/json"); // header Content-Type 정보
		conn.setRequestProperty("auth", "myAuth"); // header의 auth 정보
		conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true
		
		// 서버로부터 데이터 읽어오기
		BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		StringBuilder sb = new StringBuilder();
		String line = null;
		
		while((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
			sb.append(line);
		}
		JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
		JSONArray roster = obj.getJSONArray("roster");
		List<StartingPlayerDto> l = new ArrayList<StartingPlayerDto>();
		for(int i=0; i<roster.length(); i++) {
			StartingPlayerDto startingPlayer = new StartingPlayerDto();
			JSONObject info = (JSONObject) roster.get(i);
			JSONObject person = info.getJSONObject("person");
			Integer id = person.getInt("id");
			JSONObject position = info.getJSONObject("position");
			String abbreviation = position.getString("abbreviation");
			startingPlayer.setPlayerUid(id);
			startingPlayer.setPosition(abbreviation);

			l.add(startingPlayer);
		}
		return l;
	} catch (Exception e) {
		e.printStackTrace();
	}
		return null;
	}
	
}
