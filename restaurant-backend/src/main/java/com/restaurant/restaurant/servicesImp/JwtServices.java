package com.restaurant.restaurant.servicesImp;

import com.restaurant.restaurant.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtServices {

    @Value("${application.security.jwt.security-key}")
    private String JWT_KEY;

    @Value("${application.security.jwt.expiration}")
    private long JWT_EXPIRATION;

    @Value("${application.security.jwt.refresh-token.expiration}")
    private long REFRESH_EXPIRATION;

    // token extraction

    public String extractUserName(String token) {
        return extractClaims(token, Claims::getSubject);
    }

    private <T> T extractClaims(String token, Function<Claims, T> resolveClaims) {
        final Claims claims = extractAllClaims(token);
        return resolveClaims.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignKey() {
        byte[] byte_key = Decoders.BASE64.decode(JWT_KEY);
        return Keys.hmacShaKeyFor(byte_key);
    }

    // token generation


    public String generateJwtToken(User user) {
        return buildToken(new HashMap<>(), user, JWT_EXPIRATION);
    }

    public String generateRefreshToken(User user) {
        return buildToken(new HashMap<>(), user, REFRESH_EXPIRATION);
    }

    private String buildToken(Map<String, Object> claims, User user, long expiration) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(user.getEmail())
                .claim("uid", user.getUserId())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(getSignKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // token validation
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUserName(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return expiredExtract(token).before(new Date());
    }

    private Date expiredExtract(String token) {
        return extractClaims(token, Claims::getExpiration);
    }

}
