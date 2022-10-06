package com.ssafy.api.controller;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import javax.mail.MessagingException;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.UserLoginPostReq;
import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.api.response.UserLoginPostRes;
import com.ssafy.api.response.UserRes;
import com.ssafy.api.response.UsersRes;
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
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	UserService userService;
	@Autowired
	MailService mailService;
	
	
	/**
	  * @Method Name : register
	  * @작성일 : 2022. 9. 21
	  * @작성자 : 김동우
	  * @변경이력 : 
	
	  * @Method 설명 : 회원가입 로직, 이메일에 인증 토큰을 보내어 인증토큰의 제한 시간과 번호가 맞는 지 확인하고  맞다면 회원가입 성공
	  * @param registerInfo
	  * @return
	  */
	@PostMapping("/signin")
	@ApiOperation(value = "회원 가입", notes = "<strong>email, password, nickname</strong>을 통해 회원가입 한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "이메일 토큰 인증 실패"),
        @ApiResponse(code = 404, message = "메일을 보내지 않았음"),
        @ApiResponse(code = 405, message = "메일 인증 시간 초과"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> register(
			@RequestBody @ApiParam(value="회원가입 정보", required = true) UserRegisterPostReq registerInfo) {
		
		Optional<MailConfirmKeys> mailkey = mailService.findMailKey(registerInfo.getEmail());
		LocalDateTime nowTime = LocalDateTime.now().minusMinutes(5);
		
		// timeout check
		if(nowTime.isBefore(mailkey.get().getCreateDate())){
			if(mailkey.isPresent()) {
				if(mailkey.get().isValid()==true) {
					userService.createUsers(registerInfo);
					return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
				}
				else {
					return ResponseEntity.status(400).body(BaseResponseBody.of(401, "Email token is invalid"));	
				}
			}
			else {
				return ResponseEntity.status(403).body(BaseResponseBody.of(403, "Mail key is not sended"));	
			}
		}
		else {
			return ResponseEntity.status(405).body(BaseResponseBody.of(405, "Email token timed out(5 minuate"));	
		}
	}
	
	@PostMapping("/mail/valid/check")
	@ApiOperation(value = "메일 인증", notes = "이메일과 메일 인증 키를 통해 한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "이메일 토큰 인증 실패"),
        @ApiResponse(code = 404, message = "메일을 보내지 않았음"),
        @ApiResponse(code = 405, message = "메일 인증 시간 초과"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> register(
			@ApiParam(value = "email", required = true) @RequestParam("email") String email, @RequestParam("randomNumber") String randomNumber ) {

		Optional<MailConfirmKeys> mailkey = mailService.findMailKey(email);
		LocalDateTime nowTime = LocalDateTime.now().minusMinutes(5);
		
		// timeout check
		if(nowTime.isBefore(mailkey.get().getCreateDate())){
			if(mailkey.isPresent()) {
				if(randomNumber.equals(mailkey.get().getRandomNumber())){

					mailService.setMailValid(email);
					return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));	
				}
				else {
					return ResponseEntity.status(400).body(BaseResponseBody.of(401, "Email token is invalid"));	
				}
			}
			else {
				return ResponseEntity.status(403).body(BaseResponseBody.of(403, "Mail key is not sended"));	
			}
		}
		else {
			return ResponseEntity.status(405).body(BaseResponseBody.of(405, "Email token timed out(5 minuate"));	
		}
	}
	
	
	
	
	@PutMapping("/id-info")
	@ApiOperation(value = "정보 변경", notes = "개인 정보를 변경한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "이미 있는 nickname"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> changeInfo(
			@ApiParam(value = "email", required = true) @RequestParam("email") String email, @RequestParam("newPassword") String newPassword,@RequestParam("newNickname") String newNickname) {

		if(userService.getUsersByNickName(newNickname).isPresent()){
			if(userService.getUsersByNickName(newNickname).get().getEmail().equals(email)) {
				userService.modifyUserInfo(email,newPassword,newNickname);
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "nick name is not modified"));
			}
			else {
				return ResponseEntity.status(401).body(BaseResponseBody.of(401, "nickname is existed"));
			}
		}
		userService.modifyUserInfo(email,newPassword,newNickname);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "nickname is modified"));
	}
	
	@PutMapping("/teamName")
	@ApiOperation(value = "팀 이름 변경", notes = "이메일과 바꿀이름을 전송하면 나의 팀 이름을 변경한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> changeTeamName(
			@ApiParam(value = "email", required = true) @RequestParam("email") String email,@ApiParam(value = "newTeamName", required = true) @RequestParam("newTeamName") String newTeamName) {
     		Users u = userService.getUsersByEmail(email);
			userService.modifyUserTeamName(u,newTeamName);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "nickname is modified"));
	}
	

	@DeleteMapping("/{email}")
	@ApiOperation(value = "회원 삭제", notes = "<strong>email</strong>를 통해 회원을 삭제한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> deleteByemail(
			@PathVariable @ApiParam(value="email", required = true) String email) {
		userService.deleteUserByEmail(email);
		
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	
//	@GetMapping("/list")
//	@ApiOperation(value = "전체 회원 정보 조회", notes = "전체 회원 정보를 응답한다.") 
//    @ApiResponses({
//        @ApiResponse(code = 200, message = "성공"),
//        @ApiResponse(code = 500, message = "서버 오류")
//    })
//	public ResponseEntity<List<Users>> getUserAllInfo() {
//		List<Users> user_list = userService.getUserAll();
//		
//		return ResponseEntity.status(200).body(user_list);
//	}
	
	@GetMapping("/list")
	@ApiOperation(value = "전체 회원 정보 조회", notes = "전체 회원 정보를 응답한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<List<UsersRes>> agetUserAllInfo() {
		List<Users> userList = userService.getUserAll();
		List<UsersRes> userResList = new ArrayList();
		for(int i=0;i<userList.size();++i) {
			userResList.add(UsersRes.of(userList.get(i)));
		}
		return ResponseEntity.status(200).body(userResList);
	}
	
	
	@GetMapping("/me")
	@ApiOperation(value = "회원 본인 정보 조회", notes = "로그인한 회원 본인의 정보를 응답한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<UserRes> getUserInfo(@ApiParam(value = "token을 헤더에 추가한다.", required = true)@ApiIgnore Authentication authentication) {
		/**
		 * 요청 헤더 액세스 토큰이 포함된 경우에만 실행되는 인증 처리이후, 리턴되는 인증 정보 객체(authentication) 통해서 요청한 유저 식별.
		 * 액세스 토큰이 없이 요청하는 경우, 403 에러({"error": "Forbidden", "message": "Access Denied"}) 발생.
		 */
		
		SsafyUserDetails userDetails = (SsafyUserDetails)authentication.getDetails();
		String email = userDetails.getUsername();
		Users user = userService.getUsersByEmail(email);
		
		return ResponseEntity.status(200).body(UserRes.of(user));
	}
	
	

    
    /**
      * @Method Name : sendCertifyMail
      * @작성일 : 2022. 9. 21
      * @작성자 : 김동우
      * @변경이력 : 
    
      * @Method 설명 : 이메일에 인증 토큰 보내는 로직 
      * @param email
      * @return
      * @throws MessagingException
      * @throws IOException
      */
	@PostMapping("/mail/send/certify")
	@ApiOperation(value = "본인 인증 메일 전송", notes = "본인 인증 메일을 전송합니다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 메일 전송 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<BaseResponseBody> sendCertifyMail(@ApiParam(value = "email", required = true) @RequestParam("email") String email) throws MessagingException, IOException {    	
    	if(mailService.findMailKey(email).isPresent()) {
    		mailService.deleteMailKey(email);
    	}
    	try {
    		mailService.certificateMail(email);
    		System.out.println("메일 전송 완료");
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "email is submited"));
    	}
    	catch (Exception e){
    		return ResponseEntity.status(401).body(BaseResponseBody.of(401, "email is not submitted"));
    	}
    }
	
	/**
	  * @Method Name : findMail
	  * @작성일 : 2022. 9. 21
	  * @작성자 : 김동우
	  * @변경이력 : 
	
	  * @Method 설명 : 비밀번호를 까먹었을 시에 메일을 찾는 API입니다.
	  * @param email
	  * @return
	  * @throws MessagingException
	  * @throws IOException
	  */
	@PostMapping("/find-password")
	@ApiOperation(value = "비밀번호 찾기 및 변경 ", notes = "비밀번호를 변경하고 변경된 비밀번호를 이메일로 전송합니다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 메일 전송 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<BaseResponseBody> findMail(@ApiParam(value = "mail 정보 ", required = true) @RequestParam("email") String email) throws MessagingException, IOException {
    	if(mailService.findMailKey(email).isPresent()) {
    		mailService.deleteMailKey(email);
    	}
    	mailService.findUserPassword(email);
        System.out.println("메일 전송 완료");
        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "password change email is submited"));
    }

}
