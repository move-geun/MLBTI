package com.ssafy.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.service.BaseballPlayerService;
import com.ssafy.db.entity.BaseballPlayers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**

* @FileName : BaseballPlayerController.java
* @Date : 2022. 9. 20
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 선수 API 요청 처리를 위한 컨트롤러 정의.
*/
@Api(value = "선수 API", tags = {"BaseballPlayer"})
@RestController
@RequestMapping("/api/baseball_player")
public class BaseballPlayerController {
	@Autowired
	BaseballPlayerService baseballPlayerService;
	
	@GetMapping("/{uid}")
	@ApiOperation(value = "선수 상세 조회", notes = "<strong>uid</strong>를 통해 선수를 상세조회한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 404, message = "선수 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<BaseballPlayers> getBaseballPlayerByUid(
			@PathVariable @ApiParam(value="uid", required = true) Integer uid) {
		BaseballPlayers baseballPlayer = baseballPlayerService.getBaseballPlayerByUid(uid);
		
		if(baseballPlayer == null) {
			return ResponseEntity.status(404).body(baseballPlayer);
		}
		
		return ResponseEntity.status(200).body(baseballPlayer);
	}
	
	@GetMapping("/search")
	@ApiOperation(value = "선수 이름 검색", notes = "<strong>이름</strong>을 통해 선수를 검색한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 404, message = "선수 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<List<BaseballPlayers>> getBaseballPlayerBySearch(
			@RequestParam(value="word", required = false) String word) {
		List<BaseballPlayers> player_list = baseballPlayerService.getBaseballPlayerBySearch(word);
		
		return ResponseEntity.status(200).body(player_list);
	}
}
