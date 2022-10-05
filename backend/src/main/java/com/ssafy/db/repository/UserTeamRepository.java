package com.ssafy.db.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.BaseballPlayers;
import com.ssafy.db.entity.UserTeams;
import com.ssafy.db.entity.Users;

/**

* @FileName : UserTeamRepository.java
* @Date : 2022. 9. 21
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 유저팀 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
*/
@Repository
public interface UserTeamRepository extends JpaRepository<UserTeams, Integer> {
	List<UserTeams> findAllByUserUid(Integer user_uid);
	@Transactional
	void deleteAllByUserUid(Integer user_uid);
	UserTeams findByUserAndBaseballPlayer(Users user, BaseballPlayers baseballPlayer);
	boolean existsByUserAndBaseballPlayer(Users user, BaseballPlayers baseballPlayer);
}
