package com.ssafy.db.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.db.entity.BaseballPlayers;
import com.ssafy.db.entity.Batters;
import com.ssafy.db.entity.Teams;
import com.ssafy.db.qentity.QBatters;
import com.ssafy.db.qentity.QTeams;



/**

  * @FileName : BatterRepositorySupport.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 30 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : batters 검색을 위한 공간
  */
@Repository
public class BatterRepositorySupport {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QBatters qBatter = QBatters.batters;
    
    public List<Batters> findTeamBySearchName(String searchName){
    	
		List<Batters> batters = jpaQueryFactory.select(qBatter).from(qBatter)
				.where(qBatter.name.like("%" + searchName + "%")).fetch();
		return batters;
    }
}
