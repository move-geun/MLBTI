package com.ssafy.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.BaseballPlayers;
import com.ssafy.db.repository.BaseballPlayerRepository;

/**

* @FileName : BaseballPlayerServiceImpl.java
* @Date : 2022. 9. 20
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 선수 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
*/
@Service("baseballPlayerService")
public class BaseballPlayerServiceImpl implements BaseballPlayerService{
	@Autowired
	BaseballPlayerRepository baseballPlayerRepository;
	
	@Override
	public BaseballPlayers getBaseballPlayerByUid(Integer uid) {
		BaseballPlayers baseballPlayer = baseballPlayerRepository.findById(uid).orElse(null);
		return baseballPlayer;
	}

	@Override
	public List<BaseballPlayers> getBaseballPlayerBySearch(String word) {
		List<BaseballPlayers> player_list = baseballPlayerRepository.findByFullNameContains(word);
		return player_list;
	}

}
