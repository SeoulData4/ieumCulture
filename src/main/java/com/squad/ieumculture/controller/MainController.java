package com.squad.ieumculture.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
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

    @GetMapping("login")
    public String login (Model model) {
        return "login";
    }

    @PostMapping("/loginOk")
    public String loginOk(HttpServletRequest request,String memId, String memPw, Model model) {

        return "/";
    }

/*    @PostMapping(path="/loginOk")  // http://localhost:8888/loginOk
    public String loginOk(HttpServletRequest request, @RequestParam String mem_id, String adUserpw){
        if(adminLogicService.read(adUserid,adUserpw).getData()!= null) {
            HttpSession session = request.getSession();
            String name = adminLogicService.read(adUserid, adUserpw).getData().getAdName();
            String userid = adminLogicService.read(adUserid, adUserpw).getData().getAdUserid();
            session.setAttribute("userid",userid);
            session.setAttribute("name",name);
            return "redirect:/";
        }else{
            return "redirect:/login";
        }
    }*/
    @GetMapping("join")
    public String join1() {
        return "joinAgree";
    }

    @GetMapping("join2")
    public String join2() {
        return "joinAgree2";
    }


}
