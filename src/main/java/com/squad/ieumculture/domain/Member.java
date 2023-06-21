package com.squad.ieumculture.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

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


}
