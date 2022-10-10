/**
 * 
 */
package com.ssafy.db.dto;

import com.ssafy.db.entity.Batters;
import com.ssafy.db.entity.Pitchers;

import lombok.Getter;
import lombok.Setter;


/**

  * @FileName : PlayerDetailDto.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 10. 10 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Getter
@Setter
public class PlayerDetailDto {
	String name;
	int season;
	int playerUid;
	String league;
	String teamName;
	String position;
	String type;
	float indicator;
	String imgUrl;
	// 공통 요소
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
	Integer leftRbi;
	Integer rightRbi;
//	Integer leftGameNum;
//	Integer rightGameNum;
	Integer leftBbNum;
	Integer rightBbNum;
	Integer leftDpNum;
	Integer rightDpNum;
	
//	Integer leftIbbNum;
//	Integer rightIbbNum;
	
	// batters의 요소
	/*
	 * 타자 보여줄 때 넣을 것 팀이름, 포지션 position, 타율 indicator, 타석 수 leftPaNum, 안타 수 leftHitNum, 1루타, 2루타 leftTwobHitNum, 3루타 leftThreebHitNum, 홈런 leftHrNum, 점수낸 것 leftRbi, 볼넷 수leftIbbNum
	 */
//	Integer leftAtBatNum;
//	Integer rightAtBatNum;
//	Integer leftR;
//	Integer rightR;
//	Integer leftOps;
//	Integer rightOps;
//	Integer leftShNum;
//	Integer rightShNum;
//	Integer leftSfNum;
//	Integer rightSfNum;
//
//	
//	// pitchers의 요소
//	Integer leftEr;
//	Integer rightEr;
//	Integer leftNotMyEr;
//	Integer rightNotMyEr;
//	Integer leftAoNum;
//	Integer rightAoNum;
//	Integer leftInningNum;
//	Integer rightInningNum;	

	
	public static PlayerDetailDto of(Batters batters,String imgUrl) {
		/*
		 * 타자 보여줄 때 넣을 것 팀이름, 포지션 position, 타율 indicator, 타석 수 leftPaNum, 안타 수 leftHitNum, 1루타, 2루타 leftTwobHitNum, 3루타 leftThreebHitNum, 홈런 leftHrNum, 점수낸 것 leftRbi, 볼넷 수leftIbbNum
		 */
		PlayerDetailDto b = new PlayerDetailDto();
		b.setPlayerUid(batters.getPlayerUid());
		b.setName(batters.getName());
		b.setLeague(batters.getLeague());
		b.setSeason(batters.getSeason());
		b.setTeamName(batters.getTeamName());
		b.setPosition(batters.getPosition());
		b.setImgUrl(imgUrl);
		b.setType("B");
		
		
		b.setLeftPaNum(batters.getLeftPaNum());
		b.setRightPaNum(batters.getRightPaNum());
		b.setLeftHitNum(batters.getLeftHitNum());
		b.setRightHitNum(batters.getRightHitNum());
		b.setLeftTwobHitNum(batters.getLeftTwobHitNum());
		b.setRightTwobHitNum(batters.getRightTwobHitNum());
		b.setLeftThreebHitNum(batters.getLeftThreebHitNum());
		b.setRightThreebHitNum(batters.getRightThreebHitNum());
		b.setLeftHrNum(batters.getLeftHrNum());
		b.setRightHrNum(batters.getRightHrNum());
		b.setLeftBbNum(batters.getLeftBBNum());
		b.setRightBbNum(batters.getRightBBNum());
		b.setLeftRbi(batters.getLeftRbi());
		b.setRightRbi(batters.getRightRbi());
		b.setLeftDpNum(batters.getLeftDpNum());
		b.setRightDpNum(batters.getRightDpNum());
		// 여기서 타율 계산
		float batAvg = (batters.getLeftHitNum()+batters.getRightHitNum())/(float)(batters.getLeftHitNum()+batters.getRightHitNum()+batters.getLeftSoNum()+batters.getLeftAoNum()+batters.getLeftGoNum()+batters.getRightSoNum()+batters.getRightAoNum()+batters.getRightGoNum());
		batAvg = Math.round(batAvg*1000)/(float)1000;
		b.setIndicator(batAvg);
		return b;
	}
	
	public static PlayerDetailDto of(Pitchers pitchers, String imgUrl) {
		PlayerDetailDto b = new PlayerDetailDto();
		b.setPlayerUid(pitchers.getPlayerUid());
		b.setName(pitchers.getName());
		b.setLeague(pitchers.getLeague());
		b.setSeason(pitchers.getSeason());
		b.setTeamName(pitchers.getTeamName());
		b.setPosition(pitchers.getPosition());
		b.setImgUrl(imgUrl);
		b.setType("P");
		
		b.setLeftPaNum(pitchers.getLeftPaNum());
		b.setRightPaNum(pitchers.getRightPaNum());
		b.setLeftHitNum(pitchers.getLeftHitNum());
		b.setRightHitNum(pitchers.getRightHitNum());
		b.setLeftTwobHitNum(pitchers.getLeftTwobHitNum());
		b.setRightTwobHitNum(pitchers.getRightTwobHitNum());
		b.setLeftThreebHitNum(pitchers.getLeftThreebHitNum());
		b.setRightThreebHitNum(pitchers.getRightThreebHitNum());
		b.setLeftRbi(pitchers.getLeftRbi());
		b.setRightRbi(pitchers.getRightRbi());
		
		b.setLeftHrNum(pitchers.getLeftHrNum());
		b.setRightHrNum(pitchers.getRightHrNum());
		b.setLeftBbNum(pitchers.getLeftBbNum());
		b.setRightBbNum(pitchers.getRightBbNum());
		b.setLeftDpNum(pitchers.getLeftDpNum());
		b.setRightDpNum(pitchers.getRightDpNum());
		// 여기서 방어율 계산
//		float era = Math.round(((float)(pitchers.getLeftEr() + pitchers.getRightEr())*9*1000)/(pitchers.getLeftInningNum() + pitchers.getRightInningNum()))/(float)1000;
		float era1 = Math.round(((float)(pitchers.getLeftRbi() + pitchers.getRightRbi())*9*1000*3)/(pitchers.getLeftOutNum() + pitchers.getRightOutNum()))/(float)1000;
		
		b.setIndicator(era1);
		return b;
	}
}