package com.project.side.music.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.authorizeHttpRequests(auth -> auth
            .requestMatchers("/").permitAll()   //모든 사용자가 접근 가능
//            .requestMatchers("/admin").hasRole("ADMIN")     // admin만 사용 가능
//            .requestMatchers("/my_page/**").hasAnyRole("ADMIN", "USER") .anyRequest().authenticated() // 개인정보는 사용자 및 관리자만 접속 가능
            );

        return http.build();
    }
}
