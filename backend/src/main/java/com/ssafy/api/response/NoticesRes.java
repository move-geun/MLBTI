package com.ssafy.api.response;

import com.ssafy.db.entity.Notices;
import com.ssafy.db.entity.Users;

import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

/**

* @FileName : TeamsRes.java
* @Date : 2022. 9. 22
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : Notices 응답 객체 정의
*/
@Getter
@Setter
@ApiModel("NoticeResponse")
public class NoticesRes {
	Integer uid;
	String title;
	String content;
	Users user;
	
	public static NoticesRes of(Notices notice) {
		NoticesRes res = new NoticesRes();
		res.setUid(notice.getUid());
		res.setTitle(notice.getTitle());
		res.setContent(notice.getContent());
		res.setUser(notice.getUser());
		return res;
	}
}
