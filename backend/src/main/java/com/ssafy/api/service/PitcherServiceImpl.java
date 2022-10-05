/**
 * 
 */
package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.Batters;
import com.ssafy.db.entity.Pitchers;
import com.ssafy.db.repository.BatterRepository;
import com.ssafy.db.repository.PitcherRepository;
import com.ssafy.db.repository.PitcherRepositorySupport;


/**

  * @FileName : PitcherService.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 22 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Service("pitcherService")
public class PitcherServiceImpl implements PitcherService{

	@Autowired
	PitcherRepository pitcherRepository; 
	@Autowired
	PitcherRepositorySupport pitcherRepositorySupport; 
	
	@Override
	public List<Pitchers> getAllPitchers() {
		return pitcherRepository.findAll();
	}
	
	@Override
	public Pitchers getPitcherBySeasonAndUid(int season, int uid) {
		return pitcherRepository.findBySeasonAndPlayerUid(season, uid);
	}
	@Override
	public List<Pitchers> getPitcherByName(String searchName) {
		return pitcherRepositorySupport.findPitcherBySearchName(searchName);
	}

}
