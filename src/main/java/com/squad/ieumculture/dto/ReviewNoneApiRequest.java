package com.squad.ieumculture.dto;

public record ReviewNoneApiRequest(
        String content,
        String temp_id,
        String temp_pw,
        int star,
        boolean is_event,
        String target_idx
) {
}
