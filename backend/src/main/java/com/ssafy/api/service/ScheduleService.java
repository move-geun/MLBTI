/**
 * 
 */
package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import com.ssafy.db.entity.Notices;
import com.ssafy.db.entity.Schedules;

/**

  * @FileName : ScheduleService.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 22 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
public interface ScheduleService {
	public Optional<Schedules> getScheduleByGameId(int gameId);
	public List<Schedules> getScheduleByDate(String Date);
}
