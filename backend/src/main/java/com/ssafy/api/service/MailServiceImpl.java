package com.ssafy.api.service;

import java.util.Optional;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.MailConfirmKeys;
import com.ssafy.db.entity.Mail;
import com.ssafy.db.repository.EmailRepository;
import com.ssafy.db.repository.UserRepository;
import java.time.LocalDateTime;

@Service("mailService")
public class MailServiceImpl implements MailService {
	
	@Autowired
	private EmailRepository emailRepository;
	
	@Autowired
    private JavaMailSender emailSender;
	
	
	@Override
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
	
	@Override
	public void certificateMail(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        
        message.setSubject("mlbti 회원가입 메일 인증 서비스");
        message.setFrom("admin@mlbti.com");
        String randomString = RandomStringUtils.random(6, false, true);
        message.setText("if you want to signin Submit  number before 5 minutes \n The number is "+ randomString);
        message.setTo(email);
        MailConfirmKeys mailConfirmKey = new MailConfirmKeys();
        mailConfirmKey.setEmail(email);
        mailConfirmKey.setRandomNumber(randomString);
        mailConfirmKey.setCreateDate(LocalDateTime.now());
        System.out.println("===============================");
        
        System.out.println(message);
        System.out.println("===============================");
        emailRepository.save(mailConfirmKey);
        emailSender.send(message);
    }

	/**
	  * @Method Name : findMail
	  * @작성일 : 2022. 9. 21
	  * @작성자 : 김동우
	  * @변경이력 : 
	
	  * @Method 설명 :
	  * @param email
	  * @return
	  */
	@Override
	public Optional<MailConfirmKeys> findMailKey(String email) {
		// TODO Auto-generated method stub
		return emailRepository.findByEmail(email);
	}

	/**
	  * @Method Name : deleteMailKey
	  * @작성일 : 2022. 9. 21
	  * @작성자 : 김동우
	  * @변경이력 : 
	
	  * @Method 설명 :
	  * @param email
	 * @return 
	  */
	
	@Override
	public void deleteMailKey(String email) {
		// TODO Auto-generated method stub
//		emailRepository.deleteByEmail(email);
		System.out.println(emailRepository.findByEmail(email).get());
		
		emailRepository.delete(emailRepository.findByEmail(email).get());
		
	}
}