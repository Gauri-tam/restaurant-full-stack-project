package com.restaurant.restaurant.config;

import com.restaurant.restaurant.component.JwtAuthFilter;
import com.restaurant.restaurant.servicesImp.LogoutService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.restaurant.restaurant.enumarate.Permission.*;
import static com.restaurant.restaurant.enumarate.Roles.*;
import static org.springframework.http.HttpMethod.*;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final AuthenticationProvider authenticationProvider;
    private final JwtAuthFilter jwtAuthFilter;
    private final LogoutService logoutService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(req ->
                        req.requestMatchers("/api/auth/**").permitAll()
                                .requestMatchers("/api/auth/user/**").permitAll()
                                .requestMatchers("/admin/**").hasAnyRole(SUPER_ADMIN.name(),RESTAURANT.name(), CUSTOMER.name()) // ceo
                                .requestMatchers(GET, "/admin/**").hasAuthority(SUPER_ADMIN_READ.name())
                                .requestMatchers(POST, "/admin/**").hasAuthority(SUPER_ADMIN_CREATE.name())
                                .requestMatchers(PUT, "/admin/**").hasAuthority(SUPER_ADMIN_UPDATE.name())
                                .requestMatchers(DELETE, "/admin/**").hasAuthority(SUPER_ADMIN_DELETE.name())
                                .requestMatchers(POST, "/admin/**").hasAuthority(RESTAURANT_CREATE.name())
                                .requestMatchers(GET, "/admin/**").hasAuthority(RESTAURANT_READ.name())
                                .requestMatchers(PUT, "/admin/**").hasAuthority(RESTAURANT_UPDATE.name())
                                .requestMatchers(DELETE, "/admin/**").hasAuthority(RESTAURANT_DELETE.name())
                                .requestMatchers(GET, "/admin/**").hasAuthority(CUSTOMER_READ.name())
                                .requestMatchers("/restaurant/**").hasAnyRole(RESTAURANT.name(), CUSTOMER.name()) // restaurant
                                .requestMatchers(POST, "/restaurant/**").hasAuthority(RESTAURANT_CREATE.name())
                                .requestMatchers(GET, "/restaurant/**").hasAuthority(RESTAURANT_READ.name()) // restaurant
                                .requestMatchers(GET, "/restaurant/**").hasAuthority(CUSTOMER_READ.name()) // customer
                                .requestMatchers(PUT, "/restaurant/**").hasAuthority(RESTAURANT_UPDATE.name())
                                .requestMatchers(DELETE, "/restaurant/**").hasAuthority(RESTAURANT_DELETE.name())
                                .requestMatchers("/customer/**").hasRole(CUSTOMER.name()) // customer
                                .requestMatchers(GET, "/customer/**").hasAuthority(CUSTOMER_READ.name())
                                .anyRequest().authenticated())
                .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout(logout-> logout
                        .logoutUrl("/api/auth/logout")
                        .addLogoutHandler(logoutService)
                        .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext()));
        return http.build();
    }
}
