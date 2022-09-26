/**
 * 
 */
package com.ssafy.api.service;

import java.util.Optional;

import com.ssafy.db.entity.MailConfirmKeys;
import com.ssafy.db.entity.Mail;

/**

  * @FileName : MailService.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 21 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
public interface MailService {
	// mail 인증
	public void certificateMail(String email);
	
	// mail key 찾기
	public Optional<MailConfirmKeys> findMailKey(String email);
	
	// mail key 삭제
	public void deleteMailKey(String email);
	
	// 유저 비밀번호 찾기 -> 메일로 변경된 비밀번호가 전성됨
	public String findUserPassword(String email);
	
	// 메일 valid 세팅하기
	public void setMailValid(String email);
}
