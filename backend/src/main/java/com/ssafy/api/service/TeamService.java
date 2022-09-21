package com.ssafy.api.service;

import java.util.List;

import com.ssafy.db.entity.Teams;

/**

* @FileName : TeamService.java
* @Date : 2022. 9. 19
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 팀 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
*/
public interface TeamService {
	Teams getTeamById(Integer id);
	List<Teams> getTeamByDetails(Integer season, Integer sport_id, Integer league_id, Integer division_id);
}
