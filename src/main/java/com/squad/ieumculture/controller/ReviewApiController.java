package com.squad.ieumculture.controller;

import com.squad.ieumculture.dto.ReviewApiRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
public class ReviewApiController {

    @PostMapping("/review_upload")
    public void review_upload(@RequestBody ReviewApiRequest request){
        System.out.println(request);
    }
}
