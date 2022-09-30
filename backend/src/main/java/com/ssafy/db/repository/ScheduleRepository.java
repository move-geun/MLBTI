/**
 * 
 */
package com.ssafy.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.Schedules;


/**

  * @FileName : ScheduleRepository.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 22 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : 팀스케줄 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
  */


@Repository
public interface ScheduleRepository extends JpaRepository<Schedules, Integer>{
	Optional<Schedules> findByGameId(int gameId);
	List<Schedules> findByGameDate(String date);
}
