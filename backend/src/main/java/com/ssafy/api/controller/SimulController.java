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
	@ApiOperation(value = "경기 시물레이션", notes = "두 팀 UID를 받아서<strong>오늘 경기를</strong> 시뮬레이션한다.") 
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
	
	@PostMapping("/custom")
	@ApiOperation(value = "경기 시물레이션", notes = "사용자의 email과 실제 팀을 입력받아<strong>경기를</strong> 시뮬레이션한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<String> custom(@ApiParam(value = "email", required = true) @RequestParam("email") String email,
			@ApiParam(value = "teamUid", required = true) @RequestParam("teamUid") int teamUid) {
		
		String json = simulationService.getCustomSim(email, teamUid);
		return ResponseEntity.status(200).body(json);
	}
	
	@PostMapping("/yesterday")
	@ApiOperation(value = "경기 시물레이션", notes = "<strong>어제 경기를</strong> 시뮬레이션한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<String> yesterday() {
		
		String json = simulationService.getYesterdaySim();
		return ResponseEntity.status(200).body(json);
	}
	
}
