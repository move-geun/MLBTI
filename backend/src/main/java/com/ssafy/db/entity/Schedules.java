/**
 * 
 */
package com.ssafy.db.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

/**

  * @FileName : Schedules.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 22 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Entity
@Getter
@Setter
public class Schedules implements Serializable{
	
	@Id
	int gameId;


	String gameDateTime;
	
	String gameDate;
	String gameType;
	String status;
	String awayName;
	String homeName;
	String awayId;
	String homeId;
	String doubleheader;
	String gameNum;
	String homeProbablePitcher;
	String awayProbablePitcher;
	String homePitcherNote;
	String awayPotcherNote;
	String awayScore;
	String homeScore;
	String currentInning;
	String inningState;
	String venueId;
	String venueName;
	String winningTeam;
	String losingTeam;
	String winningPitcher;
	String losingPitcher;
	String savePitcher;
	String summary;
}
