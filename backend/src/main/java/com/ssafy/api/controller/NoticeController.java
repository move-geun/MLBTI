package com.ssafy.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ssafy.api.request.NoticeRegisterPostReq;
import com.ssafy.api.request.NoticeUpdatePutReq;
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

* @FileName : NoticeController.java
* @Date : 2022. 9. 17
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 공지사항 API 요청 처리를 위한 컨트롤러 정의.
*/
@Api(value = "공지사항 API", tags = {"Notice"})
@RestController
@RequestMapping("/api/notice")
public class NoticeController {
	@Autowired
	UserService userService;
	
	@Autowired
	NoticeService noticeService;
	
	@PostMapping()
	@ApiOperation(value = "공지사항 등록", notes = "<strong>uid(users), title, content</strong>를 통해 공지사항을 등록한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> register(
			@RequestBody @ApiParam(value="공지사항 정보", required = true) NoticeRegisterPostReq registerInfo) {
		// uid, email 중 무엇을 기준으로 찾을지
		Users user = userService.getUserByUid(registerInfo.getUser_uid());
		if(user == null) {
			return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Not user"));
		}
		
		Notices notice = noticeService.createNotice(user, registerInfo);
		
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	@PutMapping()
	@ApiOperation(value = "공지사항 수정", notes = "<strong>uid(notices), title, content</strong>를 통해 공지사항을 수정한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "공지사항 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<Notices> update(
			@RequestBody @ApiParam(value="공지사항 수정 정보", required = true) NoticeUpdatePutReq updateInfo) {
		Notices notice = noticeService.updateNotice(updateInfo);
		if(notice == null) {
			return ResponseEntity.status(404).body(notice);
		}
		
		return ResponseEntity.status(200).body(notice);
	}
	
	@GetMapping()
	@ApiOperation(value = "전체 공지사항 정보 조회", notes = "모든 공지사항을 조회한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<List<Notices>> getNoticeAllInfo() {
		List<Notices> notice_list = noticeService.getNoticeAll();
		
		return ResponseEntity.status(200).body(notice_list);
	}
	
	@DeleteMapping("/{uid}")
	@ApiOperation(value = "공지사항 삭제", notes = "<strong>uid(notices)를 통해 공지사항을 삭제한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> deleteByUid(
			@PathVariable @ApiParam(value="uid", required = true) Integer uid) {
		noticeService.deleteNoticeByUid(uid);
		
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	

}
