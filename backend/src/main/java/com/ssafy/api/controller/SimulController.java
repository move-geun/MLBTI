/**
 * 
 */
package com.ssafy.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.NoticeRegisterPostReq;
import com.ssafy.db.entity.LiveGames;
import com.ssafy.db.entity.SimulGameDatas;
import com.ssafy.db.entity.SimulGameInning;
import com.ssafy.db.entity.SimulGames;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
/**

  * @FileName : SimulController.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 26 
  * @작성자 : 박찬호
  * @변경이력 :
  * @프로그램 설명 :
  */

@Api(value = "시뮬레이션 API", tags = {"simul"})
@RestController
@RequestMapping("/api/simul")
public class SimulController {

	@PostMapping()
	@ApiOperation(value = "batter 정보 얻기", notes = "<strong>schedule에서 </strong> batter 정보를 가져온다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<String> register() {
		
		SimulGames res = new SimulGames();
		res.setGamePk(123456);
		res.setAwayName("한화 이글스");
		res.setHomeName("기아 타이거즈");
		res.setSeason(2022);
		res.setVenueName("광주 구장");
		res.setWeatherTemp(23);
		res.setWeatherWind("24m/h");
		SimulGameInning[] innings = res.getInngings();
		for(int i=0; i<24; i++) {
			innings[i] = new SimulGameInning();
		}
		SimulGameInning temp = res.getInngings()[0];
		System.out.println(temp==null);
		temp.setInning(1);
		temp.setStatus("초");
		SimulGameDatas e = new SimulGameDatas();
		e.setBatSide("R");
		e.setBatterName("노수광");
		e.setEvent("1루타");
		e.setFirstBase(false);
		e.setSecondBase(false);
		e.setThirdBase(false);
		e.setIndex(0);
		e.setInning(1);
		e.setOutCount(0);
		e.setPitcherName("김민수");
		e.setRbi(0);
		temp.getDatas().add(e);
		
		e = new SimulGameDatas();
		e.setBatSide("R");
		e.setBatterName("김인환");
		e.setEvent("삼진아웃");
		e.setFirstBase(true);
		e.setSecondBase(false);
		e.setThirdBase(false);
		e.setIndex(1);
		e.setOutCount(0);
		e.setPitcherName("김민수");
		e.setRbi(0);
		temp.getDatas().add(e);
		
		e = new SimulGameDatas();
		e.setBatSide("R");
		e.setBatterName("하주석");
		e.setEvent("병살타");
		e.setFirstBase(true);
		e.setSecondBase(false);
		e.setThirdBase(false);
		e.setIndex(0);
		e.setInning(1);
		e.setOutCount(2);
		e.setPitcherName("김민수");
		e.setRbi(0);
		temp.getDatas().add(e);
		Gson gson = new Gson();
		String json = gson.toJson(res);
		return ResponseEntity.status(200).body(json);
	}
}