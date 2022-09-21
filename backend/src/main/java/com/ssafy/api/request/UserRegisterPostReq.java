package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 유저 회원가입 API ([POST] /api/v1/users) 요청에 필요한 리퀘스트 바디 정의.
 */
@Getter
@Setter
@ApiModel("UserRegisterPostRequest")
public class UserRegisterPostReq {
	@ApiModelProperty(name="유저 이메일", example="ehddn@naver.com")
	String email;
	@ApiModelProperty(name="유저 Password", example="s#24!123")
	String password;
	@ApiModelProperty(name="유저 nickname", example="우동맛집")
	String nickname;
	@ApiModelProperty(name="email 인증을 위한 인증넘버", example="114372")
	String randomNumber;
}	
