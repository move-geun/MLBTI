/**
 * 
 */
package com.ssafy.db.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ssafy.db.entity.MailConfirmKeys;

/**

  * @FileName : EmailRepository.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 21 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : 이메일 인증 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
  */

@Repository
public interface EmailRepository extends JpaRepository<MailConfirmKeys, Long> {
	Optional<MailConfirmKeys> findByEmail(String Email);
	Optional<MailConfirmKeys> deleteByEmail(String Email);
}
