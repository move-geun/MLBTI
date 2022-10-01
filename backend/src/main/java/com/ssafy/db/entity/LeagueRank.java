/**
 * 
 */
package com.ssafy.db.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

/**

  * @FileName : LeagueRank.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 10. 1 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
@Setter
@Getter
@Entity
@Table(name="league_rank")
public class LeagueRank {
	
	@Id
	Integer uid;
	Integer leagueCode;
	String date;
	String divName;
	String divRank;
	String elimNum;
	String gb;
	Integer l;
	Integer leagueRank;
	String name;
	String sportRank;
	Integer teamId;
	Integer w;
	String wcElimNum;
	String wcGb;
	String wcRank;
}
