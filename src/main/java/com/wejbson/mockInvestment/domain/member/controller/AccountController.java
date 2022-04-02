package com.wejbson.mockInvestment.domain.member.controller;

import com.wejbson.mockInvestment.domain.member.dto.LoginRequestDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;

@Controller
public class AccountController {

    @PostMapping("/login")
    private String login(@RequestBody @Valid LoginRequestDto loginRequestDto){

        // 로그인 서비스단 호출
        return "test";
    }
}
