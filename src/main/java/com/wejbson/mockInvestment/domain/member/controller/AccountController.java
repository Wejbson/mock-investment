package com.wejbson.mockInvestment.domain.member.controller;

import com.wejbson.mockInvestment.domain.member.domain.Member;
import com.wejbson.mockInvestment.domain.member.dto.LoginReqDto;
import com.wejbson.mockInvestment.domain.member.dto.SignUpReqDto;
import com.wejbson.mockInvestment.domain.member.service.AccountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/account")
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
    private String signUp(@RequestBody @Valid SignUpReqDto signUpRequestDto) {

        Member member = new Member();
        member.setId(signUpRequestDto.getId());
        member.setName(signUpRequestDto.getName());
        member.setPassword(signUpRequestDto.getPassword());
        member.setTel(signUpRequestDto.getTel());

        accountService.signUp(member);

        return "tmp";
    }

    @PostMapping("/login")
    private Member login(@RequestBody @Valid LoginReqDto loginRequestDto) {

        accountService.login(loginRequestDto);

        // 로그인 서비스단 호출
        return null;
    }

    @PostMapping("/test-exception")
    private ResponseEntity<Member> testExcetion (@RequestBody @Valid LoginReqDto loginReqDto){

        log.info("in controller");

        if(loginReqDto.getId().equals("error")) {
            throw new RuntimeException("아이디가 이상합니다.");
        }

        Member member = new Member();
        member.setId("1126");

        return ResponseEntity.status(HttpStatus.OK).body(member);
    }

}
