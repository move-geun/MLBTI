/**
 * 
 */
package com.ssafy.db.dto;

import com.ssafy.db.entity.LeagueRank;
import com.ssafy.db.entity.Schedules;

import lombok.Getter;
import lombok.Setter;

/**

  * @FileName : LeagueRankDto.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 10. 1 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Getter
@Setter
public class LeagueRankDto {
	Integer leagueCode;
	String leagueName;
	String teamName;
	Integer win;
	Integer lose;
	String diveRank;
	String logo;
	Integer teamId;
	
	
	
	public static LeagueRankDto of(LeagueRank lr,String logo) {
		LeagueRankDto leagueRankDto= new LeagueRankDto();
		leagueRankDto.setLeagueCode(lr.getLeagueCode());
		leagueRankDto.setLeagueName(lr.getDivName());
		leagueRankDto.setTeamName(lr.getName());
		leagueRankDto.setLose(lr.getL());
		leagueRankDto.setWin(lr.getW());
		leagueRankDto.setDiveRank(lr.getDivRank());
		leagueRankDto.setLogo(logo);
		leagueRankDto.setTeamId(lr.getTeamId());
		return leagueRankDto;
	}
}
