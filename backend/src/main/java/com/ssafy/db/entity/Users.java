package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

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
    String email;
    String nickname;
    String grade;
    Integer user_teams_uid;

    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    String password;
}
