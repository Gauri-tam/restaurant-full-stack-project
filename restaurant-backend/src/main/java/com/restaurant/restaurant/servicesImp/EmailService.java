package com.restaurant.restaurant.servicesImp;

import lombok.RequiredArgsConstructor;

import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeBodyPart;
import jakarta.mail.internet.MimeMessage;
import jakarta.mail.internet.MimeMultipart;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.Properties;

@Service
@RequiredArgsConstructor
public class EmailService {

    Logger log = LoggerFactory.getLogger(EmailService.class);

    @Value("${spring.mail.username}")
    private String sender ;

    @Value("${spring.mail.password}")
    private String password;

    @Value("${spring.mail.host}")
    private String host;

    @Value("${spring.mail.port}")
    private String port;

    @Value("${spring.mail.properties.mail.smtp.auth}")
    private String auth;

    @Value("${spring.mail.properties.mail.smtp.starttls.enable}")
    private String ttl;

    private void sentEmail(String email, String msg){
        Properties properties = System.getProperties();
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", port);
        properties.put("mail.smtp.auth", auth);
        properties.put("mail.smtp.starttls.enable", ttl);

        Session session = Session.getDefaultInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(sender, password);
            }
        });
        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(sender);
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(email));
            message.setSubject("Your OTP");
            message.setText(msg);

//            String path="D:\\Workspace\\POCs\\images\\wee.png";
            String path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNDW06GO5tViY6JJfaEh804rlDkf15n5CVw&s";
            MimeMultipart mimeMultipart = new MimeMultipart();
            MimeBodyPart textMime = new MimeBodyPart();
            MimeBodyPart fileMime = new MimeBodyPart();
            try {
                textMime.setText(msg);
                File file=new File(path);
                fileMime.attachFile(file);
                mimeMultipart.addBodyPart(textMime);
                mimeMultipart.addBodyPart(fileMime);
            } catch (Exception e) {
                log.error("Ops!", e);
            }
            message.setContent(mimeMultipart);
            Transport.send(message);

        }catch (Exception e) {
            log.error("Ops!", e);
        }
    }

    public void sentEmailToUser(String email, String otpCode) {
        final String msg = "You are OTP \n" + otpCode +
                "Expired in 5 minutes"
                +"Thank you!";
        if (!email.isEmpty()){
            sentEmail(email, msg);
            System.out.println("Email Sent To User !");
        }
    }

}
