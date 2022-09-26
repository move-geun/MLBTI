package com.ssafy.db.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

/**

* @FileName : BaseballPlayers.java
* @Date : 2022. 9. 20
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : BaseballPlayers 모델 정의
*/
@Entity
@Getter
@Setter
public class BaseballPlayers {
	
	@Id
	Integer uid;
	String fullName;
	String birthDate;
	Integer currentAge;
	String birthCity;
	String birthStateProvince;
	String birthCountry;
	String height;
	boolean active;
	String primaryPositionCode;
	String primaryPositionName;
	String primaryPositionType;
	String primaryPositionAbbreviation;
	String nickName;
	String gender;
	boolean isPlayer;
	boolean isVerified;
	String deathDate;
	String deathCity;
	String deathStateProvince;
	String lastPlayedDate;
	String mlbDebutDate;
	String batSideCode;
	String pitchHandCode;
	String strikeZoneTop;
	String strikeZoneBottom;
	String weight;
	String imgUrl;
}
