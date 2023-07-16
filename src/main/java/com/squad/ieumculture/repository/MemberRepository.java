package com.squad.ieumculture.repository;

import com.squad.ieumculture.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByMemIdAndMemPw(String MemId, String MemPw);
    
    // 아이디 중복체크
    boolean existsByMemId (String memId);

    // 닉네임 중복체크
    boolean existsByMemNickname (String memNickname);
}
