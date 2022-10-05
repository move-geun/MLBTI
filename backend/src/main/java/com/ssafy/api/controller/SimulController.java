/**
 * 
 */
package com.ssafy.api.controller;

import java.util.Arrays;
import java.util.StringTokenizer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.NoticeRegisterPostReq;
import com.ssafy.api.service.SimulationService;
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
	@Autowired
	private SimulationService simulationService;
	

	@PostMapping("/normal")
	@ApiOperation(value = "경기 시물레이션", notes = "<strong>오늘 경기를</strong> 시뮬레이션한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<String> todaySimul(@ApiParam(value = "homeTeamUid", required = true) @RequestParam("homeTeamUid") int homeTeamUid,
			@ApiParam(value = "awayTeamUid", required = true) @RequestParam("awayTeamUid") int awayTeamUid) {
		
		String json = simulationService.getNormalSim(homeTeamUid, awayTeamUid);
		return ResponseEntity.status(200).body(json);
		
	}
	
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
		Integer[][] scoreBoard = new Integer[2][14];
		scoreBoard[0][0] = 2;
		scoreBoard[0][1] = 0;
		scoreBoard[0][2] = 1;
		scoreBoard[0][3] = 0;
		scoreBoard[0][4] = 2;
		scoreBoard[0][5] = 0;
		scoreBoard[0][6] = 0;
		scoreBoard[0][7] = 0;
		scoreBoard[0][8] = 3;
		scoreBoard[0][9] = 0;
		scoreBoard[0][10] = 0;
		scoreBoard[0][11] = 0;
		scoreBoard[0][12] = 12;
		scoreBoard[0][13] = 8;
		scoreBoard[1][0] = 0;
		scoreBoard[1][1] = 0;
		scoreBoard[1][2] = 0;
		scoreBoard[1][3] = 3;
		scoreBoard[1][4] = 0;
		scoreBoard[1][5] = 0;
		scoreBoard[1][6] = 0;
		scoreBoard[1][7] = 0;
		scoreBoard[1][8] = 2;
		scoreBoard[1][9] = 0;
		scoreBoard[1][10] = 0;
		scoreBoard[1][11] = 0;
		scoreBoard[1][12] = 8;
		scoreBoard[1][13] = 5;
		res.setScoreBoard(scoreBoard);
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
		
		temp = res.getInngings()[1];
		temp.setInning(1);
		temp.setStatus("말");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[2];
		System.out.println(temp==null);
		temp.setInning(2);
		temp.setStatus("초");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[3];
		temp.setInning(2);
		temp.setStatus("말");
		e = new SimulGameDatas();
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
		
		
		temp = res.getInngings()[4];
		System.out.println(temp==null);
		temp.setInning(3);
		temp.setStatus("초");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[5];
		temp.setInning(3);
		temp.setStatus("말");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[6];
		System.out.println(temp==null);
		temp.setInning(4);
		temp.setStatus("초");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[7];
		temp.setInning(4);
		temp.setStatus("말");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[8];
		System.out.println(temp==null);
		temp.setInning(5);
		temp.setStatus("초");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[9];
		temp.setInning(5);
		temp.setStatus("말");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[10];
		System.out.println(temp==null);
		temp.setInning(6);
		temp.setStatus("초");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[11];
		temp.setInning(6);
		temp.setStatus("말");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[12];
		System.out.println(temp==null);
		temp.setInning(7);
		temp.setStatus("초");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[13];
		temp.setInning(7);
		temp.setStatus("말");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[14];
		System.out.println(temp==null);
		temp.setInning(8);
		temp.setStatus("초");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[15];
		temp.setInning(8);
		temp.setStatus("말");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[16];
		System.out.println(temp==null);
		temp.setInning(9);
		temp.setStatus("초");
		e = new SimulGameDatas();
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
		
		temp = res.getInngings()[17];
		temp.setInning(9);
		temp.setStatus("말");
		e = new SimulGameDatas();
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
