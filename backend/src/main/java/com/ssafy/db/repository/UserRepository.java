package com.ssafy.db.repository;

import com.ssafy.db.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**

* @FileName : UserRepository.java
* @Date : 2022. 9. 16
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 유저 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
*/

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
    // 아래와 같이, Query Method 인터페이스(반환값, 메소드명, 인자) 정의를 하면 자동으로 Query Method 구현됨.
	Optional<Users> findByEmail(String email);
	Optional<Users> findByNickname(String nickname);
}