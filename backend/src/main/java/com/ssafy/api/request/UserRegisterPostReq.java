package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**

* @FileName : UserRegisterPostRequest.java
* @Date : 2022. 9. 16
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 유저 회원가입 API ([POST] /api/user) 요청에 필요한 리퀘스트 바디 정의.
*/
@Getter
@Setter
@ApiModel("UserRegisterPostRequest")
public class UserRegisterPostReq {
	@ApiModelProperty(name="유저 Email", example="ssafy_web@naver.com")
	String email;
	@ApiModelProperty(name="유저 Nickname", example="김싸피")
	String nickname;
	@ApiModelProperty(name="유저 Password", example="your_password")
	String password;
}
