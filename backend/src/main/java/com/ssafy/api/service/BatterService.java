/**
 * 
 */
package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import com.ssafy.db.entity.Batters;

/**

  * @FileName : BatterService.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 22 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
public interface BatterService {
	List<Batters> getAllBatters();
	Batters getBatterBySeasonAndUid(int season, int uid);
	List<Batters> getBatterByName(String searchName);
}
