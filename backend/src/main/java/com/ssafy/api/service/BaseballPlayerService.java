package com.ssafy.api.service;

import java.util.List;

import com.ssafy.db.entity.BaseballPlayers;

/**

* @FileName : BaseballPlayerService.java
* @Date : 2022. 9. 20
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 선수 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
*/
public interface BaseballPlayerService {
	BaseballPlayers getBaseballPlayerByUid(Integer uid);
	List<BaseballPlayers> getBaseballPlayerBySearch(String word);
}
