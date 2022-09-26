package com.ssafy.db.repository;

import java.util.List;

import javax.persistence.LockModeType;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.db.entity.BaseballPlayers;
import com.ssafy.db.entity.LiveGames;

/**

* @FileName : BaseballPlayerRepository.java
* @Date : 2022. 9. 20
* @작성자 : 박찬호
* @변경이력 : x
* @프로그램 설명 : 중계 게임 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
*/
@Repository
public interface LiveGamesRepository extends JpaRepository<LiveGames, Integer>{

	  @Transactional
	  @Modifying
	  @Query(value = "truncate live_games", nativeQuery = true)
	  void truncateLiveGames();

}
