package com.ssafy.api.service;

import java.util.Optional;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.MailConfirmKeys;
import com.ssafy.db.entity.Users;
import com.ssafy.db.entity.Mail;
import com.ssafy.db.repository.EmailRepository;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.UserRepositorySupport;

import java.time.LocalDateTime;

@Service("mailService")
public class MailServiceImpl implements MailService {
	
	@Autowired
	private EmailRepository emailRepository;
	@Autowired
	private UserRepositorySupport userRepositorySupport;
	
	@Autowired
    private JavaMailSender emailSender;
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public void certificateMail(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        
        message.setSubject("mlbti 회원가입 메일 인증 서비스");
        message.setFrom("admin@mlbti.com");
        String randomString = RandomStringUtils.random(6, false, true);
        message.setText("You must submit your number within 5 minutes to sign up for MLBTI. \n The number is "+ randomString);
        message.setTo(email);
        MailConfirmKeys mailConfirmKey = new MailConfirmKeys();
        mailConfirmKey.setEmail(email);
        mailConfirmKey.setRandomNumber(randomString);
        mailConfirmKey.setCreateDate(LocalDateTime.now());
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
	
	@Override
	public void setMailValid(String email) {
		MailConfirmKeys mailKey = emailRepository.findByEmail(email).get();
		mailKey.setValid(true);
		emailRepository.save(mailKey);
	}
	
	@Override
	public String findUserPassword(String email) {
		// TODO Auto-generated method stub
		SimpleMailMessage message = new SimpleMailMessage();
        
        message.setSubject("mlbti 비밀번호 찾기 서비스");
        message.setFrom("admin@mlbti.com");
        String randomString = RandomStringUtils.random(9, true, true);
        message.setText("당신의 비밀번호가 다음으로 변경되었습니다.다음 번호로 로그인하여 비밀번호 변경을 해주십시오. "+ randomString);
        message.setTo(email);
		
		Users user = userRepositorySupport.findUserByEmail(email).get();
		user.setPassword(passwordEncoder.encode(randomString));
		userRepository.save(user);
		emailSender.send(message);
		return randomString;
	}
}