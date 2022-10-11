package com.ssafy.db.entity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

/**

* @FileName : UserTeams.java
* @Date : 2022. 9. 21
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : UserTeams 모델 정의
*/
@Entity
@Getter
@Setter
public class UserTeams extends BaseEntity{
	String position;
	Integer team_index;
	Integer order;
	Integer season;
	String team;
//	Integer playerUid;
//	Integer userUid;
	@ManyToOne
	@JoinColumn(name="user_uid")
	Users user;
	@ManyToOne
	@JoinColumn(name="player_uid")
	BaseballPlayers baseballPlayer;
}
