/**
 * 
 */
package com.ssafy.db.dto;

import com.ssafy.db.entity.Batters;
import com.ssafy.db.entity.Pitchers;

import lombok.Getter;
import lombok.Setter;

/**

  * @FileName : PitchersDto.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 27 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : custom team 꾸릴 때 필요한 players 만드는 dto
  */

@Getter
@Setter
public class PitchersDto {
	String name;

	int playerUid;
	int season;
	String league;
	String teamName;
	String position;
	float era;
	
	public static PitchersDto of(Pitchers pitchers) {
		PitchersDto b = new PitchersDto();
		b.setPlayerUid(pitchers.getPlayerUid());
		b.setName(pitchers.getName());
		b.setLeague(pitchers.getLeague());
		b.setSeason(pitchers.getSeason());
		b.setTeamName(pitchers.getTeamName());
		// 여기서 방어율 계산 총 자책점 * 9 / 총 던진 이닝수

		float era = Math.round(((float)(pitchers.getLeftEr() + pitchers.getRightEr())*9*1000)/(pitchers.getLeftInningNum() + pitchers.getRightInningNum()))/(float)1000;
		float era1 = Math.round(((float)(pitchers.getLeftEr() + pitchers.getRightEr())*9*1000*3)/(pitchers.getLeftOutNum() + pitchers.getRightOutNum()))/(float)1000;
		
		b.setEra(era1);
		return b;
	}
}