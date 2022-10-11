package com.ssafy.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.UserTeamRegisterPostReq;
import com.ssafy.api.service.BaseballPlayerService;
import com.ssafy.api.service.UserService;
import com.ssafy.api.service.UserTeamService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.BaseballPlayers;
import com.ssafy.db.entity.UserTeams;
import com.ssafy.db.entity.Users;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**

* @FileName : UserTeamController.java
* @Date : 2022. 9. 21
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 유저팀 API 요청 처리를 위한 컨트롤러 정의.
*/
@Api(value = "유저팀 API", tags = {"UserTeam"})
@RestController
@RequestMapping("/api/user_team")
public class UserTeamController {
	@Autowired
	UserService userService;
	
	@Autowired
	BaseballPlayerService baseballPlayerService;
	
	@Autowired
	UserTeamService userTeamService;
	
	@PostMapping()
	@ApiOperation(value = "유저팀 등록", notes = "<strong>uid(users), uid(baseball_players), position</strong>를 통해 유저팀을 등록한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 또는 선수 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> register(
			@RequestBody @ApiParam(value="유저팀 정보", required = true) UserTeamRegisterPostReq registerInfo) {
		Integer user_uid = userService.getUsersByEmail(registerInfo.getEmail()).getUid();
		Users user = userService.getUserByUid(user_uid);
		if(user == null) {
			return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Not user"));
		}
		
		BaseballPlayers baseballPlayer = baseballPlayerService.getBaseballPlayerByUid(registerInfo.getPlayer_uid());
		if(baseballPlayer == null) {
			return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Not Player"));
		}
		
		UserTeams userTeam = userTeamService.createUserTeam(user, baseballPlayer, registerInfo.getPosition(), registerInfo.getSeason(), registerInfo.getTeam());
		if(userTeam==null) {
			return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Already Exists"));
		}
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	@GetMapping("/list")
	@ApiOperation(value = "해당 유저팀 정보 조회", notes = "유저 uid로  해당하는 유저팀을 조회한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<List<UserTeams>> getUserTeamsInfo(
			@RequestParam(value="email", required = true) String email) {
		Integer user_uid = userService.getUsersByEmail(email).getUid();
		List<UserTeams> team_list = userTeamService.getUserTeamByUserUid(user_uid);
		return ResponseEntity.status(200).body(team_list);
	}
	
	@DeleteMapping("/{uid}")
	@ApiOperation(value = "유저팀 해당 선수 삭제", notes = "<strong>uid(user_teams)를 통해 유저팀 해당 선수를 삭제한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> deleteByUid(
			@PathVariable @ApiParam(value="uid", required = true) Integer uid) {
		userTeamService.deleteUserTeamByUid(uid);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	@PutMapping("/update")
	@ApiOperation(value = "유저팀 해당 선수 타순 수정", notes = "<strong>이메일에 해당하는 user의 팀의 player_uid 선수의 타순을 변경한다") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> PutByUid(
			@RequestParam(value="email", required = true) String email,
			@RequestParam(value="player_uid", required = true) int playerUid,
			@RequestParam(value="order", required = true) int order) {
		userTeamService.updateUserTeamByUid(email, playerUid, order);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	@DeleteMapping("/list")
	@ApiOperation(value = "유저팀 전체 삭제", notes = "<strong>email(users)를 통해 유저팀을 삭제한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> deleteByEmail(
			@RequestParam(value="email", required = true) String email) {
		Integer user_uid = userService.getUsersByEmail(email).getUid();
		userTeamService.deleteUserTeamByUserUid(user_uid);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
}
