package com.ssafy.api.controller;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import javax.mail.MessagingException;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.UserLoginPostReq;
import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.api.response.UserLoginPostRes;
import com.ssafy.api.response.UserRes;
import com.ssafy.api.service.MailService;
import com.ssafy.api.service.MailServiceImpl;
import com.ssafy.api.service.UserService;
import com.ssafy.common.auth.SsafyUserDetails;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.common.util.JwtTokenUtil;
import com.ssafy.db.entity.Mail;
import com.ssafy.db.entity.MailConfirmKeys;
import com.ssafy.db.entity.Users;
import com.ssafy.db.repository.UserRepositorySupport;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import springfox.documentation.annotations.ApiIgnore;

/**

* @FileName : UserController.java
* @Date : 2022. 9. 16
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 유저 API 요청 처리를 위한 컨트롤러 정의.
*/
@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/api/v1/users")
public class UserController {
	
	@Autowired
	UserService userService;
	@Autowired
	MailService mailService;
	
	
	@PostMapping("/signin")
	@ApiOperation(value = "회원 가입", notes = "<strong>email, password, nickname</strong>을 통해 회원가입 한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> register(
			@RequestBody @ApiParam(value="회원가입 정보", required = true) UserRegisterPostReq registerInfo) {
		
		Optional<MailConfirmKeys> mailkey = mailService.findMailKey(registerInfo.getEmail());
		System.out.println("=================================");
		System.out.println(registerInfo.getRandomNumber());
		System.out.println(mailkey.get().getRandomNumber());
		System.out.println("==================================");
		LocalDateTime nowTime = LocalDateTime.now().minusMinutes(5);
		
		// timeout check
		if(nowTime.isBefore(mailkey.get().getCreateDate())){
			if(mailkey.isPresent()) {
				if(registerInfo.getRandomNumber().equals(mailkey.get().getRandomNumber())){
					System.out.println("dasdasasdasdasdasdasdasdasdas");
					Users user = userService.createUsers(registerInfo);
					return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));	
				}
				else {
	
					return ResponseEntity.status(400).body(BaseResponseBody.of(403, "Email token is invalid"));	
				}
			}
			else {
				return ResponseEntity.status(403).body(BaseResponseBody.of(403, "Mail key is not sended"));	
			}
		}
		else {
			return ResponseEntity.status(403).body(BaseResponseBody.of(405, "Email token timed out(5 minuate"));	
		}

	}
	
	@DeleteMapping("/{uid}")
	@ApiOperation(value = "회원 삭제", notes = "<strong>uid</strong>를 통해 회원을 삭제한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> deleteByUid(
			@PathVariable @ApiParam(value="uid", required = true) Integer uid) {
		userService.deleteUserByUid(uid);
		
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	@GetMapping("/list")
	@ApiOperation(value = "전체 회원 정보 조회", notes = "전체 회원 정보를 응답한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<List<Users>> getUserAllInfo() {
		List<Users> user_list = userService.getUserAll();
		
		return ResponseEntity.status(200).body(user_list);
	}
	
	@GetMapping("/me")
	@ApiOperation(value = "회원 본인 정보 조회", notes = "로그인한 회원 본인의 정보를 응답한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<UserRes> getUserInfo(@ApiIgnore Authentication authentication) {
		/**
		 * 요청 헤더 액세스 토큰이 포함된 경우에만 실행되는 인증 처리이후, 리턴되는 인증 정보 객체(authentication) 통해서 요청한 유저 식별.
		 * 액세스 토큰이 없이 요청하는 경우, 403 에러({"error": "Forbidden", "message": "Access Denied"}) 발생.
		 */
		
		
		SsafyUserDetails userDetails = (SsafyUserDetails)authentication.getDetails();
		String email = userDetails.getUsername();
		Users user = userService.getUsersByEmail(email);
		
		return ResponseEntity.status(200).body(UserRes.of(user));
	}
    
    @PostMapping("/mail/send/certify")
    public ResponseEntity<BaseResponseBody> sendCertifyMail(@ApiParam(value = "mail 인증 정보", required = true) @RequestParam("email") String email) throws MessagingException, IOException {    	
    	if(mailService.findMailKey(email).isPresent()) {
    		mailService.deleteMailKey(email);
    	}
    	mailService.certificateMail(email);
        System.out.println("메일 전송 완료");
        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "email is submited"));
    }

}
