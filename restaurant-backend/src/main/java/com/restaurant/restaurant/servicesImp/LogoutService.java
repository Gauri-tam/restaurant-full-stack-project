package com.restaurant.restaurant.servicesImp;

import com.restaurant.restaurant.repository.TokenRepo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.PrintWriter;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {

    private final TokenRepo tokenRepo;


    @SneakyThrows
    @Override
    @CrossOrigin(origins = "http://localhost:3000")
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        String authHeader = request.getHeader("Authorization");
        String token;
        PrintWriter writer = response.getWriter();
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }

        token = authHeader.substring(7);
        var userToken = tokenRepo.findUserByToken(token).orElseThrow();
        if (userToken.isExpire() || userToken.isRevoked()){
            writer.println("User Already Logout!");
        }else {
            userToken.setExpire(true);
            userToken.setRevoked(true);
            tokenRepo.save(userToken);
            writer.println("User Logout!");
        }
    }
}
