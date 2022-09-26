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
public class LiveGameDataPitchs {
	@Id
	Integer uid;
	Integer live_game_data_uid;
	String type;
	String description;
	String event;
	String eventType;
	Integer index;
}
