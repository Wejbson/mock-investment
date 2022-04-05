package com.wejbson.mockInvestment.domain.member.service;

import com.wejbson.mockInvestment.domain.member.domain.Member;
import com.wejbson.mockInvestment.domain.member.dto.LoginRequestDto;
import com.wejbson.mockInvestment.domain.member.dto.SignUpRequestDto;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class AccountServiceImpl implements AccountService{

    @Override
    public Map<String, Object> signUp(SignUpRequestDto signUpRequestDto) {

        // 중복된 id 존재하는지

        // DB 저장 로직

        return null;
    }

    @Override
    public Member login(LoginRequestDto loginRequestDto) {

        // id, password 검증 로직

        // Member 객체 데이터 조회

        // Member 객체 전달
        return null;
    }
}
