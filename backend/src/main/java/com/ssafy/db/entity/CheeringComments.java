/**
 * 
 */
package com.ssafy.db.entity;

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
public class CheeringComments {
	@OneToOne
	@JoinColumn(name="game_uid")
	LiveGames liveGame;

	int homeId;
	String homeTeamName;
	int homeCommentsNum;
	String homeTeamLogo;

	int awayId;
	String awayTeamName;
	int awayCommentsNum;
	String awayTeamLogo;
}
