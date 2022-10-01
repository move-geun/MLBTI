/**
 * 
 */
package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import com.ssafy.db.entity.LeagueRank;
import com.ssafy.db.entity.Notices;
import com.ssafy.db.entity.Schedules;


/**

  * @FileName : LeagueRankService.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 10. 1 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : 메인페이지의 리그 랭크 보여주는 서비스를 위한 interface
  */
public interface LeagueRankService {
//	public Optional<LeagueRank> getLeagueRankByDateAndLeagueCode(int leagueCode, String date);
	public List<LeagueRank> getLeagueRankByDateAndLeagueCode(String date,int leagueCode);
}
