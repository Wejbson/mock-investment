package com.wejbson.mockInvestment.domain.member.controller;

import com.wejbson.mockInvestment.domain.member.dto.LoginRequestDto;
import com.wejbson.mockInvestment.domain.member.dto.SignUpRequestDto;
import com.wejbson.mockInvestment.domain.member.service.AccountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@Slf4j
@RestController
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/echo")
    private Map<String, Object> echo(@RequestBody Map<String, Object> param)
    {
        log.info("Request Data : " + param.toString());

        return param;
    }

    @PostMapping("/sign-up")
    private String signUp(@RequestBody @Valid SignUpRequestDto signUpRequestDto) {

        accountService.signUp(signUpRequestDto);

        return "tmp";
    }

    @PostMapping("/login")
    private String login(@RequestBody @Valid LoginRequestDto loginRequestDto) {

        accountService.login(loginRequestDto);

        // 로그인 서비스단 호출
        return "tmp";
    }

}
