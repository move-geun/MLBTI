package com.ssafy.db.entity;

import java.util.ArrayList;
import java.util.List;

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
public class SimulGameInning {
	Integer uid;
	Integer inning;
	String status;
	List<SimulGameDatas> datas = new ArrayList<SimulGameDatas>();
}
