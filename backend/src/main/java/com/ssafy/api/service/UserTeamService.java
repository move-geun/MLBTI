package com.ssafy.api.service;

import java.util.List;

import com.ssafy.db.entity.BaseballPlayers;
import com.ssafy.db.entity.UserTeams;
import com.ssafy.db.entity.Users;

/**

* @FileName : UserTeamService.java
* @Date : 2022. 9. 21
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 유저팀 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
*/
public interface UserTeamService {
	UserTeams createUserTeam(Users user, BaseballPlayers baseballPlayer, String position, int Season, String team);
	void deleteUserTeamByUid(Integer uid);
	void deleteUserTeamByUserUid(Integer user_uid);
	List<UserTeams> getUserTeamByUserUid(Integer user_uid);
	UserTeams updateUserTeam(Integer uid, BaseballPlayers baseballPlayer);
	void updateUserTeamByUid(String email, int playerUid, int order);
}
