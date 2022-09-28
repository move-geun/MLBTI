package com.ssafy.db.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
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
public class LiveGameDataPitchs {
	@Id
	@GeneratedValue
	Integer uid;
	Integer live_game_data_uid; // id
	String type; // action인지 or pitch 인지
	String description; // 상황 설명
	String event; // action 일 경우 존재 ex) Wild Pitch
	String eventType; // action 일 경우 존재  ex)wild_pitch

	Integer index;

	String code; // 상황에 대한 코드
	String ballCode; //구종 코드
	String ballDescription; // 구종 설명
	Float ballSpeed;

}
