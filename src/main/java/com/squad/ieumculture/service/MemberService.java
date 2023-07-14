package com.squad.ieumculture.service;

import com.squad.ieumculture.domain.Member;
import com.squad.ieumculture.dto.MemberDTO;
import com.squad.ieumculture.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
@Slf4j
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    public boolean checkId(String memId) {
        return memberRepository.existsByMemId(memId);
    }

    public boolean checkNickname(String memNickName) {
        return memberRepository.existsByMemNickname(memNickName);
    }

    public Long join(MemberDTO newMember) {
        Member joinMember = Member.joinMember(newMember,passwordEncoder);
        return memberRepository.save(joinMember).getMemIdx();
    }

}


