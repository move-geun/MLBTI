package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**

* @FileName : NoticeUpdatePutReq.java
* @Date : 2022. 9. 16
* @작성자 : 인예림
* @변경이력 : x
* @프로그램 설명 : 공지사항 수정 API ([PUT] /api/notice) 요청에 필요한 리퀘스트 바디 정의.
*/
@Getter
@Setter
@ApiModel("NoticeUpdatePutReq")
public class NoticeUpdatePutReq {
	@ApiModelProperty(name="공지사항 uid", example="1")
	Integer notice_uid;
	@ApiModelProperty(name="공지사항 제목", example="사이트 점검 공지")
	String title;
	@ApiModelProperty(name="공지사항 내용", example="금일 오후 11시 사이트 점검 예정입니다.")
	String cotent;
}
