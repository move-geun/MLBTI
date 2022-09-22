package com.ssafy.api.response;

import com.ssafy.db.entity.Teams;

import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

/**

* @FileName : TeamsRes.java
* @Date : 2022. 9. 22
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : Teams 응답 객체 정의
*/
@Getter
@Setter
@ApiModel("TeamResponse")
public class TeamsRes {
	   Integer id;
	   String name;
	   Integer season;
	   String allStarStatus;
	   Integer venueId;
	   String venueName;
	   String teamCode;
	   String abbreviation;
	   String teamName;
	   String locationName;
	   Integer firstYearOfPlay;
	   Integer leagueId;
	   String leagueName;
	   Integer divisionId;
	   String divisionName;
	   Integer sportId;
	   String sportName;
	   String shortName;
	   String parentOrgName;
	   Integer parentOrgId;
	   String franchiseName;
	   String clubName;
	   boolean active;
	   String logo;
	   
	   public static TeamsRes of(Teams team) {
		   TeamsRes res = new TeamsRes();
		   res.setId(team.getId());
		   res.setName(team.getName());
		   res.setSeason(team.getSeason());
		   res.setAllStarStatus(team.getAllStarStatus());
		   res.setVenueId(team.getVenueId());
		   res.setVenueName(team.getVenueName());
		   res.setTeamCode(team.getTeamCode());
		   res.setAbbreviation(team.getAbbreviation());
		   res.setTeamName(team.getTeamName());
		   res.setLocationName(team.getLocationName());
		   res.setFirstYearOfPlay(team.getFirstYearOfPlay());
		   res.setLeagueId(team.getLeagueId());
		   res.setLeagueName(team.getLeagueName());
		   res.setDivisionId(team.getDivisionId());
		   res.setDivisionName(team.getDivisionName());
		   res.setSportId(team.getSportId());
		   res.setSportName(team.getSportName());
		   res.setShortName(team.getShortName());
		   res.setParentOrgName(team.getParentOrgName());
		   res.setParentOrgId(team.getParentOrgId());
		   res.setFranchiseName(team.getFranchiseName());
		   res.setClubName(team.getClubName());
		   res.setActive(team.isActive());
		   res.setLogo(team.getLogo());
		   return res;
	   }
}
