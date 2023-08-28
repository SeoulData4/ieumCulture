package com.squad.ieumculture.controller;

import com.squad.ieumculture.Header;
import com.squad.ieumculture.dto.ReviewNoneApiRequest;
import com.squad.ieumculture.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
public class ReviewApiController {
    @Autowired
    private ReviewService service;

    @PostMapping("/api/review_upload")
    public Header<ReviewNoneApiRequest> review_upload(@RequestBody Header<ReviewNoneApiRequest> request){
        ReviewNoneApiRequest data = request.getData();
        System.out.println(data);
        service.create_review_none(data);
        return Header.OK();
    }
}
