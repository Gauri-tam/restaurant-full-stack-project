package com.restaurant.restaurant.servicesImp;

import com.restaurant.restaurant.entity.User;
import com.restaurant.restaurant.enumarate.Roles;
import com.restaurant.restaurant.jwtRequest.UserRegisterRequest;
import com.restaurant.restaurant.jwtResponse.UserRegisterResponse;
import com.restaurant.restaurant.repository.UserRepo;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SuperAdminCEOService {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final UserRepo userRepo;

    @Value("${security.jwt.username}")
    private String username;

    @Value("${security.jwt.password}")
    private String password;

    public UserRegisterResponse restaurantUserRegistration(UserRegisterRequest request, HttpServletRequest req) {

        String headerToken = req.getHeader("Authorization");

        if (headerToken == null || !headerToken.startsWith("Basic ")) {
            return UserRegisterResponse.builder()
                    .userName(request.getEmail())
                    .message("Please check the header its Empty or its not Starts with Basic_ ")
                    .build();
        }
        String pair = new String(Base64.decodeBase64(headerToken.substring(6)));

        String userName = pair.split(":")[0];
        String passWord = pair.split(":")[1];

        if (userName.equals(username) && passWord.equals(password)) {
            Optional<User> userEmail = userRepo.findByEmail(request.getEmail());
            if (userEmail.isPresent()) {
                return UserRegisterResponse.builder()
                        .userName(request.getEmail())
                        .message("This Manager is Already Present Try to Login!")
                        .build();
            }
            var manger = User.builder()
                    .firstName(request.getFirstName())
                    .lastName(request.getLastName())
                    .email(request.getEmail())
                    .password(bCryptPasswordEncoder.encode(request.getPassword()))
                    .roles(Roles.RESTAURANT)
                    .phone(request.getPhone())
                    .build();
            userRepo.save(manger);
            return UserRegisterResponse.builder()
                    .userName(request.getEmail())
                    .message("Manger is Registered Successfully!")
                    .build();
        }
        return UserRegisterResponse.builder()
                .message("Basic Authentication failed!")
                .build();
    }

    public UserRegisterResponse customerRegistration(UserRegisterRequest request, HttpServletRequest req) {
        String headerToken = req.getHeader("Authorization");

        if (headerToken == null || !headerToken.startsWith("Bearer ")) {
            return UserRegisterResponse
                    .builder()
                    .message("User Token Is Not Valid")
                    .build();
        }

        String pair = new String(Base64.decodeBase64(headerToken.substring(6)));

        String userName = pair.split(":")[0];
        String passWord = pair.split(":")[1]; // point

        if (userName.equals(username) && passWord.equals(password)) {
            Optional<User> optionalUser = userRepo.findByEmail(request.getEmail());
            if (optionalUser.isPresent()) {
                return UserRegisterResponse
                        .builder()
                        .userName(request.getEmail())
                        .message("User is Already Registered, Please Try to Login!")
                        .build();
            }
            var user = User.builder()
                    .firstName(request.getFirstName())
                    .lastName(request.getLastName())
                    .email(request.getEmail())
                    .password(bCryptPasswordEncoder.encode(request.getPassword()))
                    .roles(Roles.CUSTOMER)
                    .phone(request.getPhone())
                    .build();
            userRepo.save(user);
            return UserRegisterResponse
                    .builder()
                    .userName(request.getEmail())
                    .message("User is Registered Successfully!")
                    .build();
        }
        return UserRegisterResponse.builder()
                .message("Basic Authentication failed!")
                .build();
    }
}
