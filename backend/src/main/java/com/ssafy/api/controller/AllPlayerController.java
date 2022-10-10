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
import com.ssafy.api.service.BaseballPlayerService;
import com.ssafy.api.service.BatterService;
import com.ssafy.api.service.PitcherService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.dto.BattersDto;
import com.ssafy.db.dto.PitchersDto;
import com.ssafy.db.dto.PlayerDetailDto;
import com.ssafy.db.dto.PlayersDto;
import com.ssafy.db.entity.BaseballPlayers;
import com.ssafy.db.entity.Batters;
import com.ssafy.db.entity.Notices;
import com.ssafy.db.entity.Pitchers;
import com.ssafy.db.entity.Users;
import com.ssafy.db.repository.BatterRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


/**

  * @FileName : AllPlayerController.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 28 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : 모든 선수 시즌 정보 들고오기
  */
@Api(value = "batter, pitcher 모두 가져오기 API", tags = {"allPlayers"})
@RestController
@RequestMapping("/api/allPlayers")
public class AllPlayerController {
	@Autowired
	BatterService batterService;
	@Autowired
	BatterRepository batterRepository;
	@Autowired
	PitcherService pitcherService;
	@Autowired
	BaseballPlayerService baseballPlayerService;

	@GetMapping("/list")
	@ApiOperation(value = "모든 선수 정보 얻기", notes = "<strong>모든 선수 정보를 가져온다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<BaseRes> getAll() {
		System.out.println("list");
		ArrayList<Batters> b_l = (ArrayList<Batters>) batterRepository.findAll();
		
		ArrayList<Pitchers> p_l = (ArrayList<Pitchers>) pitcherService.getAllPitchers();
		List<PlayersDto> playersList = new ArrayList();
		for(int i=0;i<b_l.size();++i) {
			playersList .add(PlayersDto.of(b_l.get(i)));
		}
		for(int i=0;i<p_l.size();++i) {
			playersList .add(PlayersDto.of(p_l.get(i)));
		}
		
		return ResponseEntity.status(200).body(BaseRes.of(200, "Success",playersList));
	}
	
	@GetMapping()
	@ApiOperation(value = "검색한 선수 정보 얻기", notes = "검색 단어가 포함된 선수들을 가져온다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<BaseRes> getBySearchName(@RequestParam(value="searchName", required = false) String searchName ) {
		ArrayList<Batters> b_l = (ArrayList<Batters>) batterService.getBatterByName(searchName);
		ArrayList<Pitchers> p_l = (ArrayList<Pitchers>) pitcherService.getPitcherByName(searchName);
		List<PlayersDto> playersList = new ArrayList();
		List<PlayersDto> PitchersList = new ArrayList();
		for(int i=0;i<b_l.size();++i) {
			playersList .add(PlayersDto.of(b_l.get(i)));
		}
		
		for(int i=0;i<p_l.size();++i) {
			playersList .add(PlayersDto.of(p_l.get(i)));
		}
		
		return ResponseEntity.status(200).body(BaseRes.of(200, "Success",playersList));
	}
	
	@GetMapping("/detail")
	@ApiOperation(value = "검색한 선수 정보 얻기 (선수 검색 페이지에서 사용할 디테일한 정보 )", notes = "검색 단어가 포함된 선수들을 가져온다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<BaseRes> getDetailBySearchName(@RequestParam(value="searchName", required = false) String searchName ) {
		ArrayList<Batters> b_l = (ArrayList<Batters>) batterService.getBatterByName(searchName);
		ArrayList<Pitchers> p_l = (ArrayList<Pitchers>) pitcherService.getPitcherByName(searchName);
		List<PlayerDetailDto> playersList = new ArrayList();
		for(int i=0;i<b_l.size();++i) {
			int player_uid = b_l.get(i).getPlayerUid();
			BaseballPlayers b = baseballPlayerService.getBaseballPlayerByUid(player_uid);
			String img_url = "";
			if(b !=null) {
				img_url =b.getImgUrl();				
			}
			playersList.add(PlayerDetailDto.of(b_l.get(i),img_url));
		}
		
		for(int i=0;i<p_l.size();++i) {
			int player_uid = p_l.get(i).getPlayerUid();
			BaseballPlayers b = baseballPlayerService.getBaseballPlayerByUid(player_uid);
			String img_url = "";
			if(b !=null) {
				img_url =b.getImgUrl();				
			}
			playersList.add(PlayerDetailDto.of(p_l.get(i),img_url));
		}
		
		return ResponseEntity.status(200).body(BaseRes.of(200, "Success",playersList));
	}
	
	
	@GetMapping("/searchUid")
	@ApiOperation(value = "uid로 검색한 선수 정보 얻기", notes = "uid로 검색한 선수 정보를 가져온다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
    	@ApiResponse(code = 404, message = "해당 선수 못 찾음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<BaseRes> getBySearchUidAndSeason(@RequestParam(value="player_uid", required = false) int player_uid,@RequestParam(value="season", required = false) int season ) {
		Batters b =  batterService.getBatterBySeasonAndUid(season,player_uid);
		Pitchers p = pitcherService.getPitcherBySeasonAndUid(season,player_uid);
		List<PlayersDto> playersList = new ArrayList();
		if (b!=null) {
			playersList.add(PlayersDto.of(b));			
		}
		if (p!=null) {
			playersList.add(PlayersDto.of(p));				
		}

		if (playersList.isEmpty()) {
			return ResponseEntity.status(404).body(BaseRes.of(404, "해당 선수가 없습니다."));
		}
		return ResponseEntity.status(200).body(BaseRes.of(200, "Success",playersList));
	}

}
