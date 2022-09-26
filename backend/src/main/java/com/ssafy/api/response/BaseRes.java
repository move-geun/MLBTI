/**
 * 
 */
package com.ssafy.api.response;

import lombok.Getter;
import lombok.Setter;

/**

  * @FileName : BaseResponse.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 22 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */

@Getter
@Setter
public class BaseRes {
	String message=null;
	Integer statusCode = null;
	Object data = null;
	
	public BaseRes() {}
	public BaseRes(Integer statusCode) {
		this.statusCode = statusCode;
	}

	public BaseRes(Integer statusCode,String message, Object data) {
		this.statusCode = statusCode;
		this.message = message;
		this.data = data;
	}
	

	public static BaseRes of(Integer statusCode,String message) {
		BaseRes responseBody = new BaseRes();
		responseBody.statusCode = statusCode;
		responseBody.message = message;
		return responseBody;
	}
	
	public static BaseRes of(Integer statusCode,String message,Object data) {
		BaseRes responseBody = new BaseRes();
		responseBody.statusCode = statusCode;
		responseBody.message = message;
		responseBody.data = data;
		return responseBody;
	}
}
