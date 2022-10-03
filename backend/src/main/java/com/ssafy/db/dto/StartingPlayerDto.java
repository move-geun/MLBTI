/**
 * 
 */
package com.ssafy.db.dto;

import com.ssafy.db.entity.LeagueRank;
import com.ssafy.db.entity.Schedules;

import lombok.Getter;
import lombok.Setter;


/**

  * @FileName : StartingPlayerDto.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 10. 3 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Getter
@Setter
public class StartingPlayerDto {

	Integer playerUid;
	String position;
}
