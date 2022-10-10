package com.ssafy.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.Pitchers;


/**

  * @FileName : PitcherRepository.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 27 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Repository
public interface PitcherRepository extends JpaRepository<Pitchers, Integer>{
	Pitchers findBySeasonAndPlayerUid(int season, int uid);
	Pitchers findBySeasonAndPlayerUidAndTeamName(int season, int uid, String name);
}
