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
	public void sendSimpleMessage(Mail mailDto);
	public void certificateMail(String email);
	public Optional<MailConfirmKeys> findMailKey(String email);
	public void deleteMailKey(String email);
}
