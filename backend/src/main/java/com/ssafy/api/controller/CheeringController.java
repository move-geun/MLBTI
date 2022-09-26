/**
 * 
 */
package com.ssafy.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.NoticeRegisterPostReq;
import com.ssafy.api.service.NoticeService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Notices;
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
	UserService userService;
	
	@Autowired
	NoticeService noticeService;
	
	@GetMapping()
	@ApiOperation(value = "응원 댓글 수 가져오기", notes = "응원 댓글을 가져온다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> getCheer(
			@RequestBody @ApiParam(value="응원 댓글을 가져올 게임", required = true) String gameId) {
		// uid, email 중 무엇을 기준으로 찾을지
		// get Cheer from gameUid
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
}
