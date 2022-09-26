package com.ssafy.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.BaseballPlayers;
import com.ssafy.db.entity.CheeringComments;


/**

  * @FileName : CheeringCommentsRepository.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 26 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : 응원 댓글 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
  */
@Repository
public interface CheeringCommentsRepository extends JpaRepository<CheeringComments, Integer>{
	Optional<CheeringComments> findById(int sssid);
}
