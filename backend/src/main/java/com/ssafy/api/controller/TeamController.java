package com.ssafy.api.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.service.TeamService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Teams;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**

* @FileName : TeamController.java
* @Date : 2022. 9. 19
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 팀 API 요청 처리를 위한 컨트롤러 정의.
*/
@Api(value = "팀 API", tags = {"Team"})
@RestController
@RequestMapping("/api/team")
public class TeamController {
	@Autowired
	TeamService teamService;
	
	@GetMapping("/{id}")
	@ApiOperation(value = "팀 상세 조회", notes = "<strong>id</strong>를 통해 팀을 상세조회한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 404, message = "팀 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<Teams> getTeamById(
			@PathVariable @ApiParam(value="id", required = true) Integer id) {
		Teams team = teamService.getTeamById(id);
		
		if(team == null) {
			return ResponseEntity.status(404).body(team);
		}
		
		return ResponseEntity.status(200).body(team);
	}
	
	@GetMapping("/nationalMLB")
	@ApiOperation(value = "내셔널 MLB팀 조회", notes = "내셔널 MLB팀을 조회한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 404, message = "팀 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<List<Teams>> getNationalMLBTeam() {
		Integer season = LocalDate.now().getYear(); // 올해 년도
		Integer sport_id = 1; // MLB
		Integer league_id = 104; // National League
		Integer division_id = null;
		List<Teams> team_list = teamService.getTeamByDetails(season, sport_id, league_id, division_id);
		
		return ResponseEntity.status(200).body(team_list);
	}
	
	@GetMapping("/americanMLB")
	@ApiOperation(value = "아메리칸 MLB팀 조회", notes = "아메리칸 MLB팀을 조회한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 404, message = "팀 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<List<Teams>> getAmericanMLBTeam() {
		Integer season = LocalDate.now().getYear(); // 올해 년도
		Integer sport_id = 1; // MLB
		Integer league_id = 103; // American League
		Integer division_id = null;
		List<Teams> team_list = teamService.getTeamByDetails(season, sport_id, league_id, division_id);
		
		return ResponseEntity.status(200).body(team_list);
	}
	
	@GetMapping("/list")
	@ApiOperation(value = "season, sport_id, league_id, division_id으로 팀 조회", notes = "<strong>season, sport_id, league_id, division_id</strong>의 조건으로 팀을 조회한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 404, message = "팀 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<List<Teams>> getTeamByDetails(
			@RequestParam(value="season", required = false) Integer season,
			@RequestParam(value="sport_id", required = false) Integer sport_id,
			@RequestParam(value="league_id", required = false) Integer league_id,
			@RequestParam(value="division_id", required = false) Integer division_id) {
		// 값이 있는 것만 검색하여 결과 return
		List<Teams> team_list = teamService.getTeamByDetails(season, sport_id, league_id, division_id);
		
		return ResponseEntity.status(200).body(team_list);
	}
}
