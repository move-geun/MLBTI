package com.ssafy.common.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.ssafy.db.entity.Mail;
 

@Service
public class MailServiceUtil {
	
	@Autowired
    private JavaMailSender emailSender;
    public void sendSimpleMessage(Mail mailDto) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("ehddn5252@gmail.com");
        System.out.println(mailDto.getAddress());
        System.out.println(mailDto.getTitle());
        System.out.println(mailDto.getContent());
        System.out.println("===============================");
        message.setTo(mailDto.getAddress());
        message.setSubject(mailDto.getTitle());
        message.setText(mailDto.getContent());
        System.out.println(message);
        emailSender.send(message);
    }
}