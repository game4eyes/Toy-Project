package com.project.side.music.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserLoginController {

    @GetMapping("/")
    public String loginUser() {
        return "Login";

    }

}
