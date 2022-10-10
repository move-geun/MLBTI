/**
 * 
 */
package com.ssafy.api.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.response.BaseRes;
import com.ssafy.api.service.LeagueRankService;
import com.ssafy.api.service.ScheduleService;
import com.ssafy.api.service.TeamService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.dto.LeagueRankDto;
import com.ssafy.db.entity.LeagueRank;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


/**

  * @FileName : LeagueRankController.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 10. 1 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Api(value = "rank API", tags = {"league rank"})
@RestController
@RequestMapping("/api/rank")
public class LeagueRankController {

	@Autowired
	LeagueRankService leagueRankService;
	
	@Autowired
	TeamService teamService;
	
	@GetMapping()
	@ApiOperation(value = "오늘날짜와 리그 코드로 순위 가져오기", notes = "<strong>date와 league code로 스케줄을 가져온다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<BaseRes> getByDate(
			@ApiParam(value="20221001", required = true)@RequestParam(name="date") String date,
			@ApiParam(value="200", required = true)@RequestParam(name="leagueCode") int leagueCode
			) {


		List<LeagueRank> lr = (ArrayList<LeagueRank>) leagueRankService.getLeagueRankByDateAndLeagueCode(date,leagueCode);
		
		if(lr.size()==0) {
			return ResponseEntity.status(404).body(BaseRes.of(404, "failed"));
		}
		List l = new ArrayList<LeagueRank>();
		int lrSize=lr.size();
		if (lrSize>5) {
			lrSize=5;
		}
		for(int i=0;i<lrSize;++i) {
			String logo = teamService.getTeamById(lr.get(i).getTeamId()).getLogo();
			l.add(LeagueRankDto.of(lr.get(i),logo));
		}

		return ResponseEntity.status(200).body(BaseRes.of(200, "Success",l));
	}
}
