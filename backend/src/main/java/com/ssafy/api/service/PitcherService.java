/**
 * 
 */
package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import com.ssafy.db.entity.Batters;
import com.ssafy.db.entity.Pitchers;

/**

  * @FileName : PitcherService.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 22 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
public interface PitcherService {
	List<Pitchers> getAllPitchers();
	Pitchers getPitcherBySeasonAndUid(int season, int uid);
	List<Pitchers> getPitcherByName(String searchName);
}
