package com.squad.ieumculture.repository;

import com.squad.ieumculture.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
