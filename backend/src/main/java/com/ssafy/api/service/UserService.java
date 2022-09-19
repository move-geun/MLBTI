package com.ssafy.api.service;

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
	Users createUser(UserRegisterPostReq userRegisterInfo);
	void deleteUserByUid(Integer uid);
	List<Users> getUserAll();
	Users getUserByUid(Integer uid);
	Users getUserByEmail(String email);
}
