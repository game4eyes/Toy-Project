package com.project.side.music.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.authorizeHttpRequests(auth -> auth
            .requestMatchers("/", "/login").permitAll()   //모든 사용자가 접근 가능
            .requestMatchers("/admin").hasRole("ADMIN")     // admin만 사용 가능
            .requestMatchers("/my_page/**").hasAnyRole("ADMIN", "USER") .anyRequest().authenticated()
            );


        return http.build();
    }
}
