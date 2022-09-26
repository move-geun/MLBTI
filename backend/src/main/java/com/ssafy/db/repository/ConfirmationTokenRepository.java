/**
 * 
 */
package com.ssafy.db.repository;


import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.db.entity.ConfirmationToken;

/**

  * @FileName : ConfirmationKokenRepository.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 20 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : 토큰 만기 기간 확인 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의. 
  */
public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken,String> {
    ConfirmationToken findByIdAndExpirationDateAfterAndExpired(String confirmationTokenId, LocalDateTime now, boolean expired);
}