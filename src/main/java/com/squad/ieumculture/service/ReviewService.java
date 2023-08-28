package com.squad.ieumculture.service;

import com.squad.ieumculture.domain.ReviewNone;
import com.squad.ieumculture.dto.ReviewNoneApiRequest;
import com.squad.ieumculture.repository.ReviewNoneRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class ReviewService {
    @Autowired
    private ReviewNoneRepository reviewNoneRepository;
    public void create_review_none(ReviewNoneApiRequest req){
        ReviewNone review = new ReviewNone();
        review.setContent(req.content());
        review.setTempId(req.temp_id());
        review.setTempPw(req.temp_pw());
        review.setStar(req.star());
        review.setEvent(req.is_event());
        review.setTargetIdx(req.target_idx());
        reviewNoneRepository.save(review);
    }
}
