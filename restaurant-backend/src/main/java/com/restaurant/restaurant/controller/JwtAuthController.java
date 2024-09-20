package com.restaurant.restaurant.controller;

import com.restaurant.restaurant.jwtRequest.UserLoginRequest;
import com.restaurant.restaurant.jwtRequest.UserRegisterRequest;
import com.restaurant.restaurant.jwtResponse.UserLoginResponse;
import com.restaurant.restaurant.jwtResponse.UserRegisterResponse;
import com.restaurant.restaurant.servicesImp.JwtAuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/auth")
public class JwtAuthController {

    private final JwtAuthService jwtAuthService; // http://localhost:8080/user/register

    @PostMapping("/customerRegistration")
    public ResponseEntity<UserRegisterResponse> Registration(@Valid @RequestBody UserRegisterRequest request){
        return ResponseEntity.ok(jwtAuthService.registrationUser(request));
    }

    @PostMapping("/restaurantRegistration")
    public ResponseEntity<UserRegisterResponse> restaurantUserRegistration(@Valid @RequestBody UserRegisterRequest request, HttpServletRequest req) {
        return ResponseEntity.ok(jwtAuthService.restaurantUserRegistration(request, req));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<UserLoginResponse> authentication(@Valid @RequestBody UserLoginRequest request){
        return ResponseEntity.ok(jwtAuthService.authenticateUser(request));
    }

    @PostMapping("/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        jwtAuthService.refreshToken(request, response);
    }
}
