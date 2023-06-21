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

    public Header<AdminApiResponse> read(String adUserid, String adUserpw) {
        return adminRepository.findByAdUseridAndAdUserpw(adUserid, adUserpw).map(
                        users -> response(users)).map(Header::OK)
                .orElseGet(() -> Header.ERROR("아이디또는 비번이 틀림"));
    }

    public void login(String memId, String memPw) {
        return memberRepository.findByMemIdAndMemPw(memId,memPw).map(
                users ->
        );

    }
}


