package com.restaurant.restaurant.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class OTP {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String generatedOtp;

    @Column(name = "expiration_time", nullable = false)
    private LocalDateTime expirationTime;

    @Column(name = "created_time", nullable = false)
    private LocalDateTime createdTime;

    @Column(nullable = false)
    private String email; // Or email, depending on how the OTP is used

    public OTP(String generatedOtp, LocalDateTime expirationTime, LocalDateTime createdTime, String email) {
        this.generatedOtp = generatedOtp;
        this.expirationTime = expirationTime;
        this.createdTime = createdTime;
        this.email = email;
    }

}
