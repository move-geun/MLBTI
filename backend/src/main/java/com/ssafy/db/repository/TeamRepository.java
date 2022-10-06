package com.ssafy.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.Batters;
import com.ssafy.db.entity.Teams;

/**

* @FileName : TeamRepository.java
* @Date : 2022. 9. 19
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 팀 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
*/

@Repository
public interface TeamRepository extends JpaRepository<Teams, Integer>{
//	Batters findBySeasonAndPlayerUid(int season, int uid);
}
