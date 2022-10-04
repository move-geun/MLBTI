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
public class Batters implements Serializable{
	
//	@OneToOne
//	@JoinColumn(name="player_uid")
//	BaseballPlayers baseballPlayer;
	
	@Id
	int playerUid;
	
	Integer season;
	
	@OneToOne
	@JoinColumn(name="team_uid")
	Teams team;
	
	String league;
	int uid;
	int leftRbiNum;
	int leftBBNum;
	int leftAONum;
	int leftSONum;
	int leftGONum;
	int leftSHNum;
	int leftSFNum;
	int leftIBBNum;
	int leftStrikeNum;
	int leftBallNum;

	int rightRbiNum;
	int rightBBNum;
	int rightAONum;
	int rightSONum;
	int rightGONum;
	int rightSHNum;
	int rightSFNum;
	int rightIBBNum;
	int rightStrikeNum;
	int rightBallNum;
	
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
	Integer leftAoNum;
	Integer rightAoNum;
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
