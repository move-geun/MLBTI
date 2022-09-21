package com.ssafy.api.service;

import java.util.Optional;

import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.db.entity.Users;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {
	Users createUsers(UserRegisterPostReq userRegisterInfo);
	Users getUsersByEmail(String userId);
	void modifyUserInfo(String email, String newPassword,String nickName);
	Optional<Users> getUsersByNickName(String nickname);
}