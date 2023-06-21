package com.squad.ieumculture.repository;

import com.squad.ieumculture.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByMemIdAndMemPw(String MemId, String MemPw);
}
