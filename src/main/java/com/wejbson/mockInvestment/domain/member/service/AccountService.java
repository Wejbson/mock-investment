package com.wejbson.mockInvestment.domain.member.service;

import com.wejbson.mockInvestment.domain.member.domain.Member;
import com.wejbson.mockInvestment.domain.member.dto.LoginReqDto;
import com.wejbson.mockInvestment.domain.member.dto.SignUpReqDto;

import java.util.Map;

public interface AccountService {

    // 회원가입 로직
    Map<String, Object> signUp(Member member);

    // 로그인 로직
    Member login(LoginReqDto loginRequestDto);
}
