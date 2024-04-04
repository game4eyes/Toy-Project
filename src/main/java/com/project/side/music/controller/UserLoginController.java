package com.project.side.music.controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/Login")
public class UserLoginController {

	@GetMapping("/login")
	public String login(HttpServletResponse response, HttpServletRequest request, String userId, boolean rememberMe) {
		// 로그인 로직 처리 구현해야됨

		String token = "hardcoded_token_value";

		if (rememberMe) {
			Cookie cookie = new Cookie("userToken", token);
			cookie.setMaxAge(7 * 24 * 60 * 60);
			cookie.setHttpOnly(true);
			response.addCookie(cookie);
		}

		return "로그인 성공";
	}

	@GetMapping("/checkToken")
	public String checkToken(HttpServletRequest request) {
		// 쿠키에서 토큰을 추출합니다.
		Cookie[] cookies = request.getCookies();
		String tokenValue = null;

		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if ("userToken".equals(cookie.getName())) {
					tokenValue = cookie.getValue();
					break;
				}
			}
		}

		if (tokenValue == null) {
			return "토큰이 존재하지 않습니다.";
		}

		// 토큰을 이용하여 사용자 아이디를 검색하는 로직을 구현
		String userId = "dummyUserId"; // 하드코딩

		return userId; // 사용자 아이디 반환
	}
}
