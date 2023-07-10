package com.squad.ieumculture.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/")
public class MainController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("login")
    public String login (Model model) {
        return "/login/login2";
    }

    @GetMapping("join")
    public String join (Model model) {
        return "/login/join";
    }

    @PostMapping("/loginOk")
    public String loginOk(HttpServletRequest request,String memId, String memPw, Model model) {
        return "/";
    }



}
