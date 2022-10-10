/**
 * 
 */
package com.ssafy.db.dto;

import javax.persistence.Id;

import com.ssafy.db.entity.Pitchers;
import com.ssafy.db.entity.Schedules;

import lombok.Getter;
import lombok.Setter;

/**

  * @FileName : ScheduleDto.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 10. 1 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */

@Getter
@Setter
public class ScheduleDto {
	int gameId;
	String gameDate;
	String gameType;
	String status;
	String awayName;
	String homeName;
	String awayId;
	String homeId;
	String awayScore;
	String homeScore;
	String currentInning;
	String inningState;
	String winningTeam;
	String losingTeam;
	String winningPitcher;
	String losingPitcher;
	String savePitcher;
	String awayLogo;
	String homeLogo;
	
	public static ScheduleDto of(Schedules s,String homeLogo, String awayLogo) {
		ScheduleDto scheduleDto = new ScheduleDto();
		scheduleDto.gameDate=s.getGameDate();
		scheduleDto.gameType=s.getGameType();
		scheduleDto.status=s.getStatus();
		scheduleDto.awayName=s.getAwayName();
		scheduleDto.homeName=s.getHomeName();
		scheduleDto.awayId=s.getAwayId();
		scheduleDto.homeId=s.getHomeId();
		scheduleDto.awayScore=s.getAwayScore();
		scheduleDto.homeScore=s.getHomeScore();
		scheduleDto.currentInning=s.getCurrentInning();
		scheduleDto.inningState=s.getInningState();
		scheduleDto.winningTeam=s.getWinningTeam();
		scheduleDto.losingTeam=s.getLosingTeam();
		scheduleDto.winningPitcher=s.getWinningPitcher();
		scheduleDto.losingPitcher=s.getLosingPitcher();
		scheduleDto.savePitcher=s.getSavePitcher();
		
		if (homeLogo.equals("")) {
			scheduleDto.homeLogo = s.getHomeName();
		}
		else {
			scheduleDto.homeLogo=homeLogo;
		}
		if (awayLogo.equals("")) {
			scheduleDto.awayLogo = s.getAwayName();
		}
		else {
			scheduleDto.awayLogo=awayLogo;
		}
		return scheduleDto;
	}
}
