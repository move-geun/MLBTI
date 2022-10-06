package com.ssafy.db.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.db.entity.Pitchers;
import com.ssafy.db.qentity.QPitchers;



/**

  * @FileName : BatterRepositorySupport.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 30 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : batters 검색을 위한 공간
  */
@Repository
public class PitcherRepositorySupport {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QPitchers qPitcher= QPitchers.pitchers;
    
    public List<Pitchers> findPitcherBySearchName(String searchName){
    	
		List<Pitchers> pitchers= jpaQueryFactory.select(qPitcher).from(qPitcher)
				.where(qPitcher.name.like("%" + searchName + "%")).fetch();
		return pitchers;
    }
    
    public Pitchers findPitcherBySeasonAndUid(int season, int uid) {
    	Pitchers pitchers = jpaQueryFactory.select(qPitcher).from(qPitcher)
				.where(qPitcher.playerUid.eq(uid)).where(qPitcher.season.eq(season)).fetchOne();
    	return pitchers;
    	
    }
}
