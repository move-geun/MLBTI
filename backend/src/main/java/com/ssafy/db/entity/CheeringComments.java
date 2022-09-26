/**
 * 
 */
package com.ssafy.db.entity;

import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

/**

  * @FileName : CheeringComments.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 26 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
public class CheeringComments {
	@OneToOne
	@JoinColumn(name="game_uid")
	LiveGames liveGame;

	String homeTeamName;
	int homeCommentsNum;
	String homeTeamLogo;
	String awayTeamName;
	int awayCommentsNum;
	String awayTeamLogo;
}
