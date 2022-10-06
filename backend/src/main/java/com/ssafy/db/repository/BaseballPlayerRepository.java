package com.ssafy.db.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.BaseballPlayers;

/**

* @FileName : BaseballPlayerRepository.java
* @Date : 2022. 9. 20
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 선수 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
*/
@Repository
public interface BaseballPlayerRepository extends JpaRepository<BaseballPlayers, Integer>{
	List<BaseballPlayers> findByFullNameContains(String word);
	BaseballPlayers findByUid(int uid);
}
