package com.wejbson.mockInvestment.domain.member.dto;

import lombok.Data;
import org.springframework.context.annotation.Description;

import javax.validation.constraints.NotBlank;

@Data
@Description(value = "회원가입 Request DTO")
public class SignUpRequestDto {

    @NotBlank
    private String id;

    @NotBlank
    private String password;

    @NotBlank
    private String name;

    @NotBlank
    private String tel;
}
