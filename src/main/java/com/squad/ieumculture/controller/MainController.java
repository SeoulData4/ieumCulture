package com.squad.ieumculture.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequiredArgsConstructor
@RequestMapping("/")
public class MainController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("header")
    public String header (ModelMap map){
        return "/fragment/header";
    }
    @GetMapping("footer")
    public String footer (ModelMap map){
        return "/fragment/footer";
    }

    @GetMapping("login")
    public ModelAndView login () {
            return new ModelAndView("/login");
        }
    @GetMapping("join")
    public String join1() {
        return "joinAgree";
    }

    @GetMapping("join2")
    public String join2() {
        return "joinAgree2";
    }


}
