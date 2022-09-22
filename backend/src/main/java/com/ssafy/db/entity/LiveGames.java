package com.ssafy.db.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

/**

* @FileName : LiveGames.java
* @Date : 2022. 9. 22
* @작성자 : 박찬호
* @변경이력 : x
* @프로그램 설명 : LiveGames 모델 정의
*/
@Entity
@Getter
@Setter
public class LiveGames {
	@Id
	Integer gamePk;
	Integer season;
	Date date;
	Date time;
	String ampm;
	String abstarctGameState;
	String detailedState;
	Integer awayId;
	String awayName;
	Integer homeId;
	String homeName;
	Integer leagueId;
	String leagueName;
	Integer divisionId;
	String divisionName;
	Integer venueId;
	String venueName;
	Integer venueTimeOffset;
	Integer weatherTemp;
	String weatherWind;
}
