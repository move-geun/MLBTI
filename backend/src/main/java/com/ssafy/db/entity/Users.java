package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**

* @FileName : Users.java
* @Date : 2022. 9. 16
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : Users 모델 정의
*/
@Entity
@Getter
@Setter
public class Users extends BaseEntity{

	@Column(name="email")
    String email;
	
	@Column(name="nickname")
	String nickname;
	
	@JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    String password;
	
	@Column(name="grade")
	String grade;
    
	@Column(name="my_team_name")
	String myTeamName;
}
