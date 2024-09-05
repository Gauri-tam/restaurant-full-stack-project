package com.restaurant.restaurant.servicesImp;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.restaurant.restaurant.entity.Token;
import com.restaurant.restaurant.entity.User;
import com.restaurant.restaurant.enumarate.Roles;
import com.restaurant.restaurant.enumarate.TokenType;
import com.restaurant.restaurant.jwtRequest.UserLoginRequest;
import com.restaurant.restaurant.jwtRequest.UserRegisterRequest;
import com.restaurant.restaurant.jwtResponse.UserLoginResponse;
import com.restaurant.restaurant.jwtResponse.UserRegisterResponse;
import com.restaurant.restaurant.repository.TokenRepo;
import com.restaurant.restaurant.repository.UserRepo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JwtAuthService {

    private final UserRepo userRepo;
    private final TokenRepo tokenRepo;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtServices jwtServices;

    private final OTPServiceImpl otpService;

    public UserRegisterResponse registrationUser(UserRegisterRequest request) {

        // check if ceo user is Present in database

        Optional<User> requestedUser = userRepo.findByEmail(request.getEmail());
        if (requestedUser.isPresent()) {
            return UserRegisterResponse
                    .builder()
                    .userName(request.getEmail())
                    .message("This User Email Is Already Registered! Try login!")
                    .build();
        }

        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(bCryptPasswordEncoder.encode(request.getPassword()))
                .phone(request.getPhone())
                .roles(Roles.CUSTOMER)
                .build();
        userRepo.save(user);

        // Generate OTP
        String otp = otpService.generateOtp();

        // Send OTP to the user's email instead of phone number
        otpService.sendOtpViaEmail(request.getEmail(), otp);

        return UserRegisterResponse
                .builder()
                .userName(request.getEmail())
                .message("Customer Register Successfully!")
                .build();
    }

    public UserLoginResponse authenticateUser(UserLoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()));
        var user = userRepo.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtServices.generateJwtToken(user);
        var refreshToken = jwtServices.generateRefreshToken(user);
        revokedToken(user);
        storeUserToken(user, jwtToken);
        return UserLoginResponse
                .builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    private void storeUserToken(User user, String access) {
        var userToken = Token.builder()
                .token(access)
                .tokenType(TokenType.BEARER)
                .expire(false)
                .revoked(false)
                .user(user)
                .build();
        tokenRepo.save(userToken);
    }

    private void revokedToken(User user) {
        var userToken = tokenRepo.findTokenByUserId(user.getUserId());
        if (userToken.isEmpty()) {
            return;
        }
        userToken.forEach(t -> {
            t.setRevoked(true);
            t.setExpire(true);
            tokenRepo.saveAll(userToken);
        });
    }

    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        String username;
        String refreshToken;

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }

        refreshToken = authHeader.substring(7);
        username = jwtServices.extractUserName(refreshToken);
        System.out.println(username);
        if (username != null) {
            var user = userRepo.findByEmail(username).orElseThrow();
            var accessToken = jwtServices.generateJwtToken(user);
            revokedToken(user);
            storeUserToken(user, accessToken);
            if (jwtServices.isTokenValid(refreshToken, user)) {
                var getRefreshToken = UserLoginResponse
                        .builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), getRefreshToken);
            }
        }
    }

    public UserRegisterResponse restaurantUserRegistration(@Valid UserRegisterRequest request, HttpServletRequest req) {

        Optional<User> requestedUser = userRepo.findByEmail(request.getEmail());
        if (requestedUser.isPresent()) {
            return UserRegisterResponse
                    .builder()
                    .userName(request.getEmail())
                    .message("This User Email Is Already Registered! Try login!")
                    .build();
        }

        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(bCryptPasswordEncoder.encode(request.getPassword()))
                .phone(request.getPhone())
                .roles(Roles.RESTAURANT)
                .build();
        userRepo.save(user);

        // Generate OTP
        String otp = otpService.generateOtp();

        // Send OTP to the user's email instead of phone number
        otpService.sendOtpViaEmail(request.getEmail(), otp);

        return UserRegisterResponse
                .builder()
                .userName(request.getEmail())
                .message("Restaurant Register Successfully!")
                .build();
    }
}
