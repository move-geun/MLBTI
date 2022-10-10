/**
 * 
 */
package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.Schedules;
import com.ssafy.db.repository.ScheduleRepository;

/**

  * @FileName : ScheduleService.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 22 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Service("scheduleService")
public class ScheduleServiceImpl implements ScheduleService {

	@Autowired
	ScheduleRepository scheduleRepository;
	
	@Override
	public Optional<Schedules> getScheduleByGameId(int gameId) {
		Optional<Schedules> s = scheduleRepository.findByGameId(gameId);
		return s;
	}

	/**
	  * @Method Name : getScheduleByDate
	  * @작성일 : 2022. 10. 1
	  * @작성자 : 김동우
	  * @변경이력 : 
	
	  * @Method 설명 :
	  * @param Date
	  * @return
	  */
	
	@Override
	public List<Schedules> getScheduleByDate(String Date) {
		// TODO Auto-generated method stub
		List<Schedules> s = scheduleRepository.findByGameDate(Date);

		return s;
	}
}