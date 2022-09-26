package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.BaseballPlayers;
import com.ssafy.db.entity.CheeringComments;
import com.ssafy.db.repository.CheeringCommentsRepository;

/**

  * @FileName : CheeringService.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 26 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */

@Service("cheeringService")
public class CheeringServiceImpl implements CheeringService{
	
	@Autowired
	CheeringCommentsRepository cheeringCommentsRepository;
	
	@Override
	public Optional<CheeringComments> getCheeringCommentsByGamePk(int gamePk) {

		return cheeringCommentsRepository.findById(gamePk);
	};
	
	@Override
	public void saveCheeringComments(int gamePk, boolean isHome) {
		CheeringComments cheering = cheeringCommentsRepository.findById(gamePk).get();
		if(isHome) {
			cheering.setHomeCommentsNum(cheering.getHomeCommentsNum()+1);
		}
		else {
			cheering.setAwayCommentsNum(cheering.getAwayCommentsNum()+1);
		}
		cheeringCommentsRepository.save(cheering);
	}


}
