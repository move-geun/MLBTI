package com.ssafy.common.exception.handler;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class WebSocketHandler extends TextWebSocketHandler{

    private static final ConcurrentHashMap<String, WebSocketSession> CLIENTS = new ConcurrentHashMap<String, WebSocketSession>();
   
    ObjectMapper json = new ObjectMapper();
    
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        CLIENTS.put(session.getId(), session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        CLIENTS.remove(session.getId());
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

       Map<String, Object> dataMap = new HashMap<>();
       System.out.println("=========================textMessage"+ message);
       System.out.println("타입 확익!!!!  " + message.getPayload().getClass().getSimpleName());
       String payload = message.getPayload();
       String[] payloadArr = payload.split("csendTosMessage");

        String senderId = (String) session.getAttributes().get("sessionId");  //메시지를 보낸 아이디
        String id = session.getId();
        System.out.println("payload: "+payload);
        dataMap.put("message",payloadArr[1].substring(3, payloadArr[1].length()-2));
        dataMap.put("id",payloadArr[0].substring(16, payloadArr[0].length()-3));
        
     // Convert Map to byte array
//        ByteArrayOutputStream byteOut = new ByteArrayOutputStream();
//        ObjectOutputStream out = new ObjectOutputStream(byteOut);
//        out.writeObject(dataMap);
        String msg = json.writeValueAsString(dataMap);

        CLIENTS.entrySet().forEach( arg->{
            if(!arg.getKey().equals(id)) {  //같은 아이디가 아니면 메시지를 전달합니다.
                try {
//                    arg.getValue().sendMessage(new TextMessage(byteOut.toByteArray()));
                   arg.getValue().sendMessage(new TextMessage(msg));
                    } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
        
        
        
    }
    
//    @Override
//    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
//        String id = session.getId();  //메시지를 보낸 아이디
//        CLIENTS.entrySet().forEach( arg->{
//            if(!arg.getKey().equals(id)) {  //같은 아이디가 아니면 메시지를 전달합니다.
//                try {
//                    arg.getValue().sendMessage(message);
//                } catch (IOException e) {
//                    e.printStackTrace();
//                }
//            }
//        });
//    }

}