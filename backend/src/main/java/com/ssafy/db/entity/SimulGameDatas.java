package com.ssafy.db.entity;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

/**

* @FileName : LiveGameDatas.java
* @Date : 2022. 9. 22
* @작성자 : 박찬호
* @변경이력 : x
* @프로그램 설명 : LiveGameDatas 모델 정의
*/
@Getter
@Setter
public class SimulGameDatas {
	Integer uid;
	Integer inning;
	Integer index;
	String event;
	Integer rbi;
	Integer strikeCount;
	Integer ballCount;
	Integer outCount;
	boolean firstBase;
	boolean secondBase;
	boolean thirdBase;
	String batterName;
	String batSide;
	String pitcherName;
	String pitchHand;
}
