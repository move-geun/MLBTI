/**
 * 
 */
package com.ssafy.db.repository;

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
  * @프로그램 설명 :
  */


@Repository
public interface ScheduleRepository extends JpaRepository<Schedules, Integer>{
	Optional<Schedules> findByGameId(int gameId);
}
