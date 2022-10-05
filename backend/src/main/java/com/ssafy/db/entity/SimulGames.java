package com.ssafy.db.entity;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

/**

* @FileName : LiveGames.java
* @Date : 2022. 9. 22
* @작성자 : 박찬호
* @변경이력 : x
* @프로그램 설명 : LiveGames 모델 정의
*/
@Getter
@Setter
public class SimulGames {
	Integer gamePk;
	Integer season;
	String awayName;
	String homeName;
	String venueName;
	Integer weatherTemp;
	String weatherWind;
	SimulGameInning[] inngings = new SimulGameInning[24];
	Integer[][] scoreBoard = new Integer[2][14];
}
