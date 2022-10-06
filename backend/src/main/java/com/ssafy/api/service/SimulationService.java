/**
 * 
 */
package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import com.ssafy.db.entity.Notices;
import com.ssafy.db.entity.Schedules;

/**

  * @FileName : SimulationService.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 22 
  * @작성자 : 박찬호
  * @변경이력 :
  * @프로그램 설명 :
  */
public interface SimulationService {
	String getNormalSim(int homeTeamUid, int awayTeamUid);
	String getCustomSim(String email, int teamUid);
	String getYesterdaySim();
}
