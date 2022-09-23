/**
 * 
 */
package com.ssafy.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
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
public class Batters extends BaseEntity {
	
	@OneToOne
	@JoinColumn(name="player_uid")
	BaseballPlayers baseballPlayer;
	
	Integer season;
	
	@OneToOne
	@JoinColumn(name="team_uid")
	Teams team;
	
	String team_name;
	String name;
	String birthday;
	float height;
	float weight;
	String position;
	int leftHitNum;
	int rightHitNum;
	int leftTwobHitNum;
	int rightTwobHitNum;
	int leftThreebHitNum;
	int rightThreebHitNum;
	int leftHrNum;
	int rightHrNum;
	int leftPaNum;
	int rightPaNum;
	int leftAtBatNum;
	int rightAtBatNum;
	int leftR;
	int rightR;
	int leftRbi;
	int rightRbi;
	int leftGameNum;
	int rightGameNum;
	int leftOps;
	int rightOps;
	int leftBbNum;
	int rightBbNum;
	int leftAoNum;
	int rightAoNum;
	int leftDpNum;
	int rightDpNum;
	int leftShNum;
	int rightShNum;
	int leftSfNum;
	int rightSfNum;
	int leftIbbNum;
	int rightIbbNum;
	String playerWeatherTmi;
	float average;
	float standardDeviation;
	String education;
	
}
