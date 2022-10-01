/**
 * 
 */
package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.LeagueRank;
import com.ssafy.db.entity.Schedules;
import com.ssafy.db.repository.LeagueRankRepository;
import com.ssafy.db.repository.ScheduleRepository;


/**

  * @FileName : LeagueRankServiceImpl.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 10. 1 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Service("leagueRankService")
public class LeagueRankServiceImpl implements LeagueRankService {

	@Autowired
	LeagueRankRepository leagueRankRepository;

	/**
	  * @Method Name : getLeagueRankByDateAndLeagueCode
	  * @작성일 : 2022. 10. 1
	  * @작성자 : 김동우
	  * @변경이력 : 
	
	  * @Method 설명 :
	  * @param Date
	  * @return
	  */
	
	@Override
	public List<LeagueRank> getLeagueRankByDateAndLeagueCode(String date,int leagueCode) {
		
		List<LeagueRank> l = leagueRankRepository.findByDateAndLeagueCode(date,leagueCode);

		return l;
	}
	
	
}