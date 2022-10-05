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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.NoticeRegisterPostReq;
import com.ssafy.api.response.BaseRes;
import com.ssafy.api.service.BatterService;
import com.ssafy.api.service.PitcherService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.dto.BattersDto;
import com.ssafy.db.dto.PitchersDto;
import com.ssafy.db.entity.Batters;
import com.ssafy.db.entity.Notices;
import com.ssafy.db.entity.Pitchers;
import com.ssafy.db.entity.Users;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;



/**

  * @FileName : PitcherController.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 27 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : 투수 정보 가져오는 api
  */
@Api(value = "투수 API", tags = {"Pitcher"})
@RestController
@RequestMapping("/api/pitcher")
public class PitcherController {
	@Autowired
	PitcherService pitcherService;

	@GetMapping("/list")
	@ApiOperation(value = "모든 pitcher 정보 얻기", notes = "<strong>pitchers에서 모든 pitcher 정보를 가져온다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<BaseRes> getAll() {
		ArrayList<Pitchers> l = (ArrayList<Pitchers>) pitcherService.getAllPitchers();
		List<PitchersDto> pitchersList = new ArrayList();
		for(int i=0;i<l.size();++i) {
			pitchersList.add(PitchersDto.of(l.get(i)));
		}
		
		return ResponseEntity.status(200).body(BaseRes.of(200, "Success",pitchersList));
	}
	
		@GetMapping()
		@ApiOperation(value = "pitcher 정보 얻기", notes = "<strong>pitchers에서 한 명의 pitcher 정보를 가져온다.") 
	    @ApiResponses({
	    	@ApiResponse(code = 200, message = "성공"),
	    	@ApiResponse(code = 404, message = "해당 선수 못 찾음"),
	        @ApiResponse(code = 500, message = "서버 오류")
	    })
		public ResponseEntity<BaseRes> getOne(@ApiParam(value = "season", required = true) @RequestParam("season") int season, @ApiParam(value = "playerUid", required = true) @RequestParam("playerUid") int playerUid ){
			Pitchers p = pitcherService.getPitcherBySeasonAndUid(season, playerUid);
			if(p!=null) {
				return ResponseEntity.status(200).body(BaseRes.of(200, "Success",PitchersDto.of(p)));
			}
			return ResponseEntity.status(404).body(BaseRes.of(404, "해당 선수가 없습니다."));
		
	}
}
