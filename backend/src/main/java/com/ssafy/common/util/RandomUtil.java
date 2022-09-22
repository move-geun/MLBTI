/**
 * 
 */
package com.ssafy.common.util;
import java.util.Random;
/**

  * @FileName : RandomUtil.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 21 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 : 랜덤 변수 생성
  */
public class RandomUtil {
	
	public static void mkRandomNum() {
		StringBuffer key = new StringBuffer();
		Random rnd = new Random();
		for (int i = 0; i < 6; i++) { 
	    	 int index = rnd.nextInt(3);
	           switch (index) {
	           case 0:
	               key.append(((int) (rnd.nextInt(26)) + 97));
	               break;
	           case 1:
	               key.append(((int) (rnd.nextInt(26)) + 65));
	               break;
	           case 2:
	               key.append((rnd.nextInt(10)));
	               break;
	       }
	    }
	}
}
