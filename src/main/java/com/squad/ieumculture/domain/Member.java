package com.squad.ieumculture.domain;

import com.squad.ieumculture.dto.MemberDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;
import org.springframework.security.crypto.password.PasswordEncoder;

@Entity
@Getter
@ToString(callSuper = true)
public class Member extends AuditingFields{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memIdx;
    private String memId;
    private String memPw;
    private String memName;
    private String memHp;
    private String memEmail;
    private String memNickname;
    private Long memGender;
    private String memBirth;

    protected Member(){};


    @Builder
    public Member (String memId, String memPw, String memName, String memHp, String memEmail, String memNickname, Long memGender, String memBirth) {
        this.memId = memId;
        this.memPw = memPw;
        this.memName = memName;
        this.memHp = memHp;
        this.memEmail = memEmail;
        this.memNickname = memNickname;
        this.memGender = memGender;
        this.memBirth = memBirth;
    }

    public static Member joinMember(MemberDTO memberDTO, PasswordEncoder passwordEncoder) {
        Member member = Member.builder()
                .memId(memberDTO.memId())
                .memPw(passwordEncoder.encode(memberDTO.memPw()))
                .memName(memberDTO.memName())
                .memHp(memberDTO.memHp())
                .memEmail(memberDTO.memEmail())
                .memNickname(memberDTO.memNickname())
                .memGender(memberDTO.memGender())
                .memBirth(memberDTO.memBirth())
                .build();
        return member;
    }

    public static Member of(String memId, String memPw, String memName, String memHp, String memEmail, String memNickname, Long memGender, String memBirth) {
        return new Member(memId,memPw, memName,memHp, memEmail, memNickname, memGender,memBirth);
    }

}
