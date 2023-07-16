package com.squad.ieumculture.controller;

import com.squad.ieumculture.domain.Member;
import com.squad.ieumculture.dto.MemberDTO;
import com.squad.ieumculture.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/check_id")
    @ResponseBody
    public boolean checkId(@RequestBody String memId) {
        return memberService.checkId(memId);
    }

    @PostMapping("/check_nickname")
    @ResponseBody
    public boolean checkNickname(@RequestBody String memNickName) {
        return memberService.checkNickname(memNickName);
    }

    @PostMapping("join")
    @ResponseBody
    public Long join(@RequestBody MemberDTO newMember) {
        return memberService.join(newMember);
    }
}
