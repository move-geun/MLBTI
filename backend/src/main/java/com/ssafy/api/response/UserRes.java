package com.ssafy.api.response;

import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Users;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 회원 본인 정보 조회 API ([GET] /api/v1/users/me) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@ApiModel("UserResponse")
public class UserRes{
	@ApiModelProperty(name="User ID")
	String userId;
	String teamName;
	String nickname;
	public static UserRes of(Users user) {
		UserRes res = new UserRes();
		res.setUserId(user.getEmail());
		res.setTeamName(user.getMyTeamName());
		res.setNickname(user.getNickname());
		return res;
	}
}
