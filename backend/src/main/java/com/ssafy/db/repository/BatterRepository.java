package com.ssafy.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.BaseballPlayers;
import com.ssafy.db.entity.Batters;


/**

  * @FileName : BatterRepository.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 27 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : batters 관련 디비 쿼리 생성을 위한 jpa 인터페이스
  */
@Repository
public interface BatterRepository extends JpaRepository<Batters, Integer>{
	Batters findBySeasonAndPlayerUid(int season, int uid);
	Batters findBySeasonAndPlayerUidAndTeamName(int season, int uid, String teamName);
}
