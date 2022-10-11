package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**

* @FileName : UserTeamRegisterPostReq.java
* @Date : 2022. 9. 21
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 유저팀 등록 API ([POST] /api/user_team) 요청에 필요한 리퀘스트 바디 정의.
*/
@Getter
@Setter
@ApiModel("UserTeamRegisterPostReq")
public class UserTeamRegisterPostReq {
	@ApiModelProperty(name="유저 email", example="test@naver.com")
	String email;
	@ApiModelProperty(name="선수 uid", example="547943")
	Integer player_uid;
	@ApiModelProperty(name="선수 시즌", example="2022")
	Integer season;
	@ApiModelProperty(name="선수 팀", example="New York Yankees")
	String team;
	@ApiModelProperty(name="해당 선수 포지션", example="Pitcher")
	String position;

}
