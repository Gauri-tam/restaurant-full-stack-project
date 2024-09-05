package com.restaurant.restaurant.repository;

import com.restaurant.restaurant.entity.OTP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OTPRepository extends JpaRepository<OTP, Integer> {

    Optional<OTP> findByEmail(String email);
}
