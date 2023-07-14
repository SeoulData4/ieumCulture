package com.squad.ieumculture.dto;

import com.squad.ieumculture.domain.Member;

public record MemberDTO(
        Long memIdx,
        String memId,
        String memPw,
        String memName,
        String memHp,
        String memEmail,
        String memNickname,
        Long memGender,
        String memBirth
) {
    public Member toEntity() {
        return Member.of(memId,memPw, memName,memHp, memEmail, memNickname, memGender,memBirth);
    }
}
