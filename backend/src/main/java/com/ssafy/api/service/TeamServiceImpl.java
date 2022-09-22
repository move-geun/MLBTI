package com.ssafy.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.Teams;
import com.ssafy.db.repository.TeamRepository;
import com.ssafy.db.repository.TeamRepositorySupport;

/**

* @FileName : TeamServiceImpl.java
* @Date : 2022. 9. 19
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 팀 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
*/
@Service("teamService")
public class TeamServiceImpl implements TeamService{
	@Autowired
	TeamRepository teamRepository;
	
	@Autowired
	TeamRepositorySupport teamRepositorySupport;
	
	@Override
	public Teams getTeamById(Integer id) {
		Teams team = teamRepository.findById(id).orElse(null);
		return team;
	}

	@Override
	public List<Teams> getTeamByDetails(Integer season, Integer sport_id, Integer league_id, Integer division_id) {
		List<Teams> team_list = teamRepositorySupport.findTeamByDetails(season, sport_id, league_id, division_id);
		return team_list;
	}

}
