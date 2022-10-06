/**
 * 
 */
package com.ssafy.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name="new_new_pitchers")
public class Pitchers {
	
//	@OneToOne
//	@JoinColumn(name="player_uid")
//	BaseballPlayers baseballPlayer;
	@Id
	int uid;
	int playerUid;
	
	Integer season;
	
	
	String league;
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
	Integer leftEr;
	Integer rightEr;
	Integer leftNotMyEr;
	Integer rightNotMyEr;
	Integer leftGameNum;
	Integer rightGameNum;
	Integer leftBbNum;
	Integer rightBbNum;
	Integer leftAoNum;
	Integer rightAoNum;
	Integer leftDpNum;
	Integer rightDpNum;
	Integer leftIbbNum;
	Integer rightIbbNum;
	Integer leftInningNum;
	Integer rightInningNum;	
	Integer leftRbi;
	Integer rightRbi;	
	String playerWeatherTmi;
	Float average;
	Float standardDeviation;
	String education;
	Integer leftOutNum;
	Integer rightOutNum;
}
