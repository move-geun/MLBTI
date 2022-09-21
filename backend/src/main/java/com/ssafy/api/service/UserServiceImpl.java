package com.ssafy.api.service;

import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.db.entity.MailConfirmKeys;
import com.ssafy.db.entity.Users;
import com.ssafy.db.repository.EmailRepository;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.UserRepositorySupport;

/**

* @FileName : UserServiceImpl.java
* @Date : 2022. 9. 16
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
*/
@Service("userService")
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	EmailRepository emailRepository;
	
	@Autowired
	UserRepositorySupport userRepositorySupport;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Override
	public Users createUsers(UserRegisterPostReq userRegisterInfo) {
		Users user = new Users();
		user.setEmail(userRegisterInfo.getEmail());
		// 보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
		user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
		user.setGrade("GENERAL");
		user.setNickname(userRegisterInfo.getNickname());
		return userRepository.save(user);
	}
	
	@Override
	public void deleteUserByUid(Integer uid) {
		userRepository.deleteById(uid);
	}
	
	@Override
	public List<Users> getUserAll() {
		List<Users> user_list = userRepository.findAll();
		return user_list;
	}

	@Override
	public Users getUsersByEmail(String Email) {
		// 디비에 유저 정보 조회 (userId 를 통한 조회).
		Users user = userRepositorySupport.findUserByEmail(Email).get();

		return user;
	}

	public Users getUserByUid(Integer uid) {
		Users user = userRepository.findById(uid).get();
		return user;
	}
}
