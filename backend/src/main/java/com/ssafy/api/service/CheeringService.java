package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import com.ssafy.db.entity.BaseballPlayers;
import com.ssafy.db.entity.CheeringComments;

/**

  * @FileName : CheeringService.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 26 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : 실시간 응원 구현을 위한 서비스
  */

public interface CheeringService {
	public Optional<CheeringComments> getCheeringCommentsByGamePk(int gamePk);

	void saveCheeringComments(int uid, boolean isHome);

}
