/**
 * 
 */
package com.ssafy.db.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

/**

  * @FileName : Batters.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 22 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */

@Entity
@Setter
@Getter
@Table(name="new_batters")
public class Batters implements Serializable{
	
//	@OneToOne
//	@JoinColumn(name="player_uid")
//	BaseballPlayers baseballPlayer;
	
	int playerUid;
	
	Integer season;
	
	@OneToOne
	@JoinColumn(name="team_uid")
	Teams team;
	
	String league;
	@Id
	int uid;
	Integer leftRbiNum;
	Integer leftBBNum;
	Integer leftAoNum;
	Integer leftSoNum;
	Integer leftGoNum;
	Integer leftSHNum;
	Integer leftSFNum;
	Integer leftIBBNum;
	Integer leftStrikeNum;
	Integer leftBallNum;

	Integer rightRbiNum;
	Integer rightBBNum;
	Integer rightAoNum;
	Integer rightSoNum;
	Integer rightGoNum;
	Integer rightSHNum;
	Integer rightSFNum;
	Integer rightIBBNum;
	Integer rightStrikeNum;
	Integer rightBallNum;
	
	String teamName;
	String name;
	String position;
	Integer leftHitNum;
	Integer rightHitNum;
	Integer leftTwobHitNum;
	Integer rightTwobHitNum;
	Integer leftThreebHitNum;
	Integer rightThreebHitNum;
	Integer leftHrNum;
	Integer rightHrNum;
	Integer leftPaNum;
	Integer rightPaNum;
	Integer leftAtBatNum;
	Integer rightAtBatNum;
	Integer leftR;
	Integer rightR;
	Integer leftRbi;
	Integer rightRbi;
	Integer leftGameNum;
	Integer rightGameNum;
	Integer leftOps;
	Integer rightOps;
	Integer leftBbNum;
	Integer rightBbNum;
	Integer leftDpNum;
	Integer rightDpNum;
	Integer leftShNum;
	Integer rightShNum;
	Integer leftSfNum;
	Integer rightSfNum;
	Integer leftIbbNum;
	Integer rightIbbNum;
	String playerWeatherTmi;
	Float average=(float) 0.0;
	Float standardDeviation=(float) 0.0;
	String education;
	
}
