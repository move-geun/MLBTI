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
  * @프로그램 설명 :
  */

@Repository
public interface EmailRepository extends JpaRepository<MailConfirmKeys, Long> {
	Optional<MailConfirmKeys> findByEmail(String Email);
	Optional<MailConfirmKeys> deleteByEmail(String Email);
}
