package com.restaurant.restaurant.servicesImp;

import com.restaurant.restaurant.repository.TokenRepo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

import java.io.PrintWriter;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {


    private final TokenRepo tokenRepo;

    @SneakyThrows
    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        String authHeader = request.getHeader("Authorization");
        String token;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }

        token = authHeader.substring(7);
        var userToken = tokenRepo.findUserByToken(token).orElseThrow();
        userToken.setExpire(true);
        userToken.setRevoked(true);
        tokenRepo.save(userToken);
        PrintWriter writer = response.getWriter();
        writer.println("User Logout!");

    }
}
