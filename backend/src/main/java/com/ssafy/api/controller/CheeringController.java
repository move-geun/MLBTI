/**
 * 
 */
package com.ssafy.api.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.NoticeRegisterPostReq;
import com.ssafy.api.response.BaseRes;
import com.ssafy.api.service.CheeringService;
import com.ssafy.api.service.NoticeService;
import com.ssafy.api.service.TeamService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.dto.CheeringDto;
import com.ssafy.db.entity.CheeringComments;
import com.ssafy.db.entity.Notices;
import com.ssafy.db.entity.Teams;
import com.ssafy.db.entity.Users;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**

  * @FileName : CheeringController.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 26 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Api(value = "응원 API", tags = {"cheering"})
@RestController
@RequestMapping("/api/cheering")
public class CheeringController {

	
	@Autowired
	CheeringService cheeringService;
	@Autowired
	TeamService teamService;
	
	
	
	@GetMapping()
	@ApiOperation(value = "응원 객체 가져오기", notes = "중계 팀관련 응원 정보를 가져온다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 404, message = "해당 game id 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<BaseRes> getCheeringComments(
			@ApiParam(value="100", required = true)@RequestParam("gamePk") int gamePk) {

		Optional<CheeringComments> ojt=  cheeringService.getCheeringCommentsByGamePk(gamePk);
		if(ojt.isPresent()){
			return ResponseEntity.status(200).body(BaseRes.of(200, "Success",ojt.get()));
		}
		else {
			return ResponseEntity.status(404).body(BaseRes.of(404, "해당 id 없음"));
		}
	}
	
	@GetMapping("/info")
	@ApiOperation(value = "게임에 대한 이름, 로고, 기본 응원 수를 가져온다.", notes = "응원 페이지 관련 정보를 가져온다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 404, message = "해당 game id 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<BaseRes> getTeamImages(
			@ApiParam(value="100", required = true)@RequestParam("gamePk") int gamePk) {
		/*
		1. game id를 가져옴
		2. 가져온 id로 livegames 에 있는 away_id, away_name, home_id, home_name을 가져온다.
		3. 가져온 home_id 와 away_id 로 teams의 logo 를 가져옴
		만들 것: team id 를 통해 logo 가져온다 ( 있음)
		*/ 

		Optional<CheeringComments> ojt=  cheeringService.getCheeringCommentsByGamePk(gamePk);
		if(ojt.isPresent()){
			int awayId = ojt.get().getAwayId();
			int homeId = ojt.get().getHomeId();

			Teams homeTeam = teamService.getTeamById(homeId);
			Teams awayTeam = teamService.getTeamById(awayId);
			CheeringDto cheeringDto = new CheeringDto();
			cheeringDto.setAwayCount(ojt.get().getAwayCommentsNum());
			cheeringDto.setHomeCount(ojt.get().getHomeCommentsNum());
			cheeringDto.setAwayLogo(awayTeam.getLogo());
			cheeringDto.setHomeLogo(homeTeam.getLogo());
			cheeringDto.setAwayName(awayTeam.getTeamName());
			cheeringDto.setHomeName(homeTeam.getTeamName());
			return ResponseEntity.status(200).body(BaseRes.of(200, "Success",cheeringDto));
		}
		else {
			return ResponseEntity.status(404).body(BaseRes.of(404, "해당 id 없음"));
		}
	}
	
	@PutMapping()
	@ApiOperation(value = "응원 count 올리기", notes = "버튼 클릭시 응원하는 팀의 count가 올라간다.")
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 404, message = "해당 경기 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<BaseRes> setCheeringComments(
			@ApiParam(value="100", required = true)@RequestParam("gamePk") int gamePk, @ApiParam(value="true", required = true)@RequestParam("isHome") Boolean isHome){
		Optional<CheeringComments> ojt=  cheeringService.getCheeringCommentsByGamePk(gamePk);
		if(ojt.isPresent()){
			cheeringService.saveCheeringComments(gamePk, isHome);
			return ResponseEntity.status(200).body(BaseRes.of(200, "Success",ojt.get()));
		}
		else {
			return ResponseEntity.status(404).body(BaseRes.of(404, "user not found failed",ojt.get()));
		}
	}
}
