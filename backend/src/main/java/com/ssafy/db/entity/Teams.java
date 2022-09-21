package com.ssafy.db.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

/**

* @FileName : Teams.java
* @Date : 2022. 9. 19
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : Teams 모델 정의
*/
@Entity
@Getter
@Setter
public class Teams {
   @Id
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

}
