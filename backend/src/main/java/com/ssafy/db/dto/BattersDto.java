/**
 * 
 */
package com.ssafy.db.dto;

import com.ssafy.db.entity.Batters;

import lombok.Getter;
import lombok.Setter;

/**

  * @FileName : BattersDto.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 27 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : custom team 꾸릴 때 만드는 dto
  */

@Getter
@Setter
public class BattersDto {
	String name;
	int playerUid;
	int season;
	String league;
	String teamName;
	String position;
	float batAvg;
	
	public static BattersDto of(Batters batters) {
		BattersDto b = new BattersDto();
		b.setPlayerUid(batters.getPlayerUid());
		b.setName(batters.getName());
		b.setLeague(batters.getLeague());
		b.setSeason(batters.getSeason());
		b.setTeamName(batters.getTeamName());
		// 여기서 타율 계산
		float avg = (batters.getLeftHitNum()+batters.getRightHitNum()+batters.getLeftTwobHitNum()+batters.getRightTwobHitNum()+batters.getLeftThreebHitNum()+batters.getRightThreebHitNum()+batters.getLeftHrNum()+batters.getRightHrNum())/(float)(batters.getLeftAtBatNum()+batters.getRightAtBatNum());
		b.setBatAvg(avg);

		return b;
	}
}