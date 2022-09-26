package com.ssafy.db.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.db.entity.Teams;
import com.ssafy.db.qentity.QTeams;

/**

* @FileName : TeamRepository.java
* @Date : 2022. 9. 19
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 팀 모델 관련 디비 쿼리 생성을 위한 구현 정의.
*/
@Repository
public class TeamRepositorySupport {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QTeams qTeam = QTeams.teams;
    
    public List<Teams> findTeamByDetails(Integer season, Integer sportId, Integer leagueId, Integer divisionId){
    	JPAQuery<Teams> team_list = jpaQueryFactory.select(qTeam).from(qTeam);
    	if(season != null) {
    		team_list = team_list.where(qTeam.season.eq(season));
    	}
    	if(sportId != null) {
    		team_list = team_list.where(qTeam.sportId.eq(sportId));
    	}
    	if(leagueId != null) {
    		team_list = team_list.where(qTeam.leagueId.eq(leagueId));
    	}
    	if(divisionId != null) {
    		team_list = team_list.where(qTeam.divisionId.eq(divisionId));
    	}
    	return team_list.fetch();
    }
}
