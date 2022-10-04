/**
 * 
 */
package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.Batters;
import com.ssafy.db.repository.BatterRepository;
import com.ssafy.db.repository.BatterRepositorySupport;


/**

  * @FileName : BatterService.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 22 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Service("batterService")
public class BatterServiceImpl implements BatterService{
	
	/**
	  * @Method Name : getAllBatters
	  * @작성일 : 2022. 9. 27
	  * @작성자 : 김동우
	  * @변경이력 : 
	
	  * @Method 설명 : 모든 batters 를 가져온다.
	  * @return
	  */
	@Autowired
	BatterRepository battersRepository; 
	
	@Autowired
	BatterRepositorySupport battersRepositorySupport; 
	
	@Override
	public List<Batters> getAllBatters() {
		return battersRepository.findAll();
	}
	
	@Override
	public Batters getBatterBySeasonAndUid(int season, int uid) {
		return battersRepository.findBySeasonAndPlayerUid(season, uid);
	}

	/**
	  * @Method Name : getBatterByName
	  * @작성일 : 2022. 9. 30
	  * @작성자 : 김동우
	  * @변경이력 : 
	
	  * @Method 설명 :
	  * @param searchName
	  * @return
	  */
	
	@Override
	public List<Batters> getBatterByName(String searchName) {
		return battersRepositorySupport.findTeamBySearchName(searchName);
	}
	

}
