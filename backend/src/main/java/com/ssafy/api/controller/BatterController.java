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
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.dto.BattersDto;
import com.ssafy.db.entity.Batters;
import com.ssafy.db.entity.Notices;
import com.ssafy.db.entity.Users;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**

  * @FileName : BatterController.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 22 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */

@Api(value = "타자 API", tags = {"Batter"})
@RestController
@RequestMapping("/api/batter")
public class BatterController {
	@Autowired
	BatterService batterService;

	@GetMapping("/list")
	@ApiOperation(value = "모든 batter 정보 얻기", notes = "<strong>batters에서 모든 batter 정보를 가져온다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<BaseRes> getAll() {
		ArrayList<Batters> l = (ArrayList<Batters>) batterService.getAllBatters();
		List<BattersDto> battersList = new ArrayList();
		for(int i=0;i<l.size();++i) {
			battersList.add(BattersDto.of(l.get(i)));
		}
		
		return ResponseEntity.status(200).body(BaseRes.of(200, "Success",battersList));
	}
	
		@GetMapping()
		@ApiOperation(value = "batter 정보 얻기", notes = "<strong>batters에서 한 명의 batter 정보를 가져온다.") 
	    @ApiResponses({
	        @ApiResponse(code = 200, message = "성공"),
	    	@ApiResponse(code = 404, message = "해당 선수 못 찾음"),
	        @ApiResponse(code = 500, message = "서버 오류")
	    })
		public ResponseEntity<BaseRes> getOne(@ApiParam(value = "season", required = true) @RequestParam("season") int season, @ApiParam(value = "playerUid", required = true) @RequestParam("playerUid") int playerUid ){
			Batters b = batterService.getBatterBySeasonAndUid(season, playerUid);
			if (b!=null) {
				return ResponseEntity.status(200).body(BaseRes.of(200, "Success",BattersDto.of(b)));
			}
			else {
				return ResponseEntity.status(404).body(BaseRes.of(404, "해당 선수가 없습니다."));
			}
	}
}
