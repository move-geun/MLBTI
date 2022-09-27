/**
 * 
 */
package com.ssafy.db.dto;

import lombok.Getter;
import lombok.Setter;

/**

  * @FileName : CheeringDto.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 26 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : 응원 기능을 위한 Dto
  */

@Getter
@Setter
public class CheeringDto {
	public CheeringDto(){
		this.awayCount=0;
		this.homeCount=0;
	}
	String homeName;
	String awayName;
	String homeLogo;
	String awayLogo;
	int homeCount;
	int awayCount;
}
