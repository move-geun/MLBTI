package com.ssafy.db.entity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

/**

* @FileName : Notices.java
* @Date : 2022. 9. 17
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : Notices 모델 정의
*/
@Entity
@Getter
@Setter
public class Notices extends BaseEntity{
	String title;
	String content;
	
	@ManyToOne
	@JoinColumn(name="user_uid")
	Users user;
}
