package com.restaurant.restaurant.servicesImp;

import com.restaurant.restaurant.entity.OTP;
import com.restaurant.restaurant.repository.OTPRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OTPServiceImpl {

    private final OTPRepository otpRepository;

    private final JavaMailSender javaMailSender;

    private final EmailService emailService;

    private final  LocalDateTime createdTime = LocalDateTime.now();

    private final LocalDateTime expirationTime =  createdTime.plus(Duration.ofMinutes(5));

    // Generate a random 6-digit OTP
    public String generateOtp() {
        return String.valueOf((int) ((Math.random() * 900000) + 100000));
    }

    // Store OTP with expiry (e.g., 5 minutes)

//    public void storeOtp(OTP otp) {
//        if (System.currentTimeMillis() > expirationTime) {
//            return;
//        }
//        otpRepository.save(otp);
//    }

    // Verify OTP
    public boolean verifyOtp(Integer id, String userOtp) {
        Optional<OTP> optionalOtp = otpRepository.findById(id);

        if (optionalOtp.isPresent()) {
            OTP otp = optionalOtp.get();

            // Check if OTP is expired
            if (otp.getExpirationTime() != null && createdTime.equals(expirationTime) ) {
                // Compare the stored OTP with the user-provided OTP
                return otp.getGeneratedOtp() != null && otp.getGeneratedOtp().equals(userOtp);
            } else {
                // OTP is expired
                return false;
            }
        } else {
            // OTP not found in the database
            return false;
        }
    }

    // Send OTP via email (or SMS using a mock service)
    public void sendOtpViaEmail(String email, String otp) {
        // Generate OTP and expiration time

        // Save OTP to database
        OTP otpEntity = new OTP(otp, expirationTime, LocalDateTime.now(), email);
        otpRepository.save(otpEntity);

        // Send OTP via email
        emailService.sentEmailToUser(email, otp);
    }
}
