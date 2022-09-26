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
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Notices;
import com.ssafy.db.entity.Users;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**

  * @FileName : LiveController.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 26 
  * @작성자 : 박찬호
  * @변경이력 :
  * @프로그램 설명 :
  */

@Api(value = "중계 API", tags = {"live"})
@RestController
@RequestMapping("/api/live")
public class LiveController {

	@PostMapping()
	@ApiOperation(value = "batter 정보 얻기", notes = "<strong>schedule에서 </strong> batter 정보를 가져온다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> register(
			@RequestBody @ApiParam(value="경기 ", required = true) NoticeRegisterPostReq registerInfo) {
		
		
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
}
