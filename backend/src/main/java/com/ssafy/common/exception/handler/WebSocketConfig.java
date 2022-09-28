/**
 * 
 */
package com.ssafy.common.exception.handler;

/**

  * @FileName : WebSocketConfig.java
  * @Project : mlb-analysis-project
  * @Date : 2022. 9. 24 
  * @작성자 : 김동우
  * @변경이력 :
  * @프로그램 설명 :
  */
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor;

import com.ssafy.api.controller.*;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer{

    private final WebSocketHandler webSocketHandler;

    public WebSocketConfig(WebSocketHandler webSocketHandler) {
        this.webSocketHandler = webSocketHandler;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(webSocketHandler, "/teamName").setAllowedOrigins("*").addInterceptors(new HttpSessionHandshakeInterceptor());
    }
}