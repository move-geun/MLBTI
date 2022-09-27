package com.ssafy.api.service;


import java.util.Optional;

import java.util.List;


import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.db.entity.Users;

/**

* @FileName : UserService.java
* @Date : 2022. 9. 16
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
*/
public interface UserService {
	Users createUsers(UserRegisterPostReq userRegisterInfo);
	Users getUsersByEmail(String userId);
	void modifyUserInfo(String email, String newPassword,String nickName);
	Optional<Users> getUsersByNickName(String nickname);
	void deleteUserByUid(Integer uid);
	void deleteUserByEmail(String email);
	List<Users> getUserAll();
	Users getUserByUid(Integer uid);
	void modifyUserTeamName(Users user, String teamName);
}

