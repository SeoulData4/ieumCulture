package com.squad.ieumculture.dto;

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
}
