/**
 * 
 */
package com.ssafy.db.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
/**

  * @FileName : EmailConfirm.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 20 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */

@Entity
@Getter
@Setter
@Table(name = "mail_confirm_keys")
public class MailConfirmKeys extends BaseEntity{

    
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "uid")
//    int id;
	
	@Column(name= "email")
	private String email;
	
	@Column(name = "random_number")
	private String randomNumber;
    
	@CreatedDate
    @Column(updatable = false)
    private LocalDateTime createDate;
	
	private boolean isValid;
}

