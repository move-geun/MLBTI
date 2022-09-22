package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.NoticeRegisterPostReq;
import com.ssafy.api.request.NoticeUpdatePutReq;
import com.ssafy.api.response.NoticesRes;
import com.ssafy.db.entity.Notices;
import com.ssafy.db.entity.Users;
import com.ssafy.db.repository.NoticeRepository;

/**

* @FileName : NoticeServiceImpl.java
* @Date : 2022. 9. 17
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 공지사항 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
*/
@Service("noticeService")
public class NoticeServiceImpl implements NoticeService{
	@Autowired
	NoticeRepository noticeRepository;

	@Override
	public Notices createNotice(Users user, NoticeRegisterPostReq noticeRegisterInfo) {
		Notices notice = new Notices();
		notice.setTitle(noticeRegisterInfo.getTitle());
		notice.setContent(noticeRegisterInfo.getCotent());
		notice.setUser(user);
		return noticeRepository.save(notice);
	}

	@Override
	public Notices getNoticeByUid(Integer uid) {
		Notices notice = noticeRepository.findById(uid).orElse(null);
		return notice;
	}

	
	@Override
	public void deleteNoticeByUid(Integer uid) {
		noticeRepository.deleteById(uid);
	}

	@Override
	public List<NoticesRes> getNoticeAll() {
		List<NoticesRes> notice_list = noticeRepository.findAllBy();
		return notice_list;
	}

	@Override
	public Notices updateNotice(NoticeUpdatePutReq noticeUpdateInfo) {
		Notices notice = noticeRepository.findById(noticeUpdateInfo.getNotice_uid()).orElse(null);
		
		if(notice == null) {
			return null;
		}
		
		notice.setTitle(noticeUpdateInfo.getTitle());
		notice.setContent(noticeUpdateInfo.getCotent());
		return noticeRepository.save(notice);
	}

}
