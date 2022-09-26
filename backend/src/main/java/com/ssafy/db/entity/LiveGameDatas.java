package com.ssafy.db.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

/**

* @FileName : LiveGameDatas.java
* @Date : 2022. 9. 22
* @작성자 : 박찬호
* @변경이력 : x
* @프로그램 설명 : LiveGameDatas 모델 정의
*/
@Entity
@Getter
@Setter
public class LiveGameDatas {
	@Id
	Integer uid;
	Integer live_gamePk;
	String event;
	String eventType;
	String description;
	Integer rbi;
	Date startTime;
	Date endTime;
	boolean isComplete;
	String batterName;
	Integer batterId;
	String batSide;
	String pitcherName;
	Integer pitcherId;
	String pitchHand;
	Integer inning;
	String half;
	Integer index;
}
