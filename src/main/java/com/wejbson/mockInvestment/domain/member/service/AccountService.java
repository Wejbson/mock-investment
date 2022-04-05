package com.wejbson.mockInvestment.domain.member.service;

import com.wejbson.mockInvestment.domain.member.domain.Member;
import com.wejbson.mockInvestment.domain.member.dto.LoginRequestDto;
import com.wejbson.mockInvestment.domain.member.dto.SignUpRequestDto;

import java.util.Map;

public interface AccountService {

    // 회원가입 로직
    Map<String, Object> signUp(SignUpRequestDto signUpRequestDto);

    // 로그인 로직
    Member login(LoginRequestDto loginRequestDto);
}
