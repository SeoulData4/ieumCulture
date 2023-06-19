package com.squad.ieumculture.service;


import com.squad.ieumculture.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberRepository memberRepository;
}
