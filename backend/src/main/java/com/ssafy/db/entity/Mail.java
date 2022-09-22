/**
 * 
 */
package com.ssafy.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
/**

  * @FileName : Mail.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 20 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */

@Getter
@Setter
public class Mail{
    private String address;
    private String title;
    private String content;
}

