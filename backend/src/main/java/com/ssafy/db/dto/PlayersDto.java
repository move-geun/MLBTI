/**
 * 
 */
package com.ssafy.db.dto;

import lombok.Getter;
import lombok.Setter;

/**

  * @FileName : PlayersDto.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 27 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : custom team 꾸릴 때 만드는 dto
  */

@Getter
@Setter
public class PlayersDto {
	String name;
	int season;
	String league;
	String teamName;
	String position;
	float ERA;
	float bat_avg;
}