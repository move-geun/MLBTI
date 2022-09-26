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

  * @FileName : CheeringComments.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 26 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Getter
@Setter
@Entity
public class CheeringComments {
	@Id
	@Column(name="game_uid")
	int gamePk;
	
//	@OneToOne
//	@JoinColumn(name="liveGames_gamePk")
//	LiveGames gamePk;


	int homeId;
	String homeTeamName;
	int homeCommentsNum;
	String homeTeamLogo;

	int awayId;
	String awayTeamName;
	int awayCommentsNum;
	String awayTeamLogo;
}
