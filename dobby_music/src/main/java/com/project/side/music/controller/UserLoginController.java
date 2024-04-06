package com.project.side.music.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

public class UserLoginController {

    @RestController
    public class LoginController {

        @GetMapping("/")
        public String loginUser() {
			return "Logins";
        }

    }

}
