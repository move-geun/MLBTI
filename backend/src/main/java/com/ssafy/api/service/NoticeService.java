package com.ssafy.api.service;

import java.util.List;

import com.ssafy.api.request.NoticeRegisterPostReq;
import com.ssafy.api.request.NoticeUpdatePutReq;
import com.ssafy.db.entity.Notices;
import com.ssafy.db.entity.Users;

/**

* @FileName : NoticeService.java
* @Date : 2022. 9. 17
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 공지사항 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
*/
public interface NoticeService {
	Notices createNotice(Users user, NoticeRegisterPostReq noticeRegisterInfo);
	void deleteNoticeByUid(Integer uid);
	List<Notices> getNoticeAll();
	Notices updateNotice(NoticeUpdatePutReq noticeUpdateInfo);
}
