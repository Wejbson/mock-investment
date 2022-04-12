package com.wejbson.mockInvestment.domains.coin.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

// 업비트 API
// Access Key : 8ZIuewPOGfmFoLCyhgssccju91MfOD5QCLn3M7Nf
// Secret Key : mqcNTwOI5Zd9SrW7zndj9SlCZM6Dx1XtbWpGK72T

@Entity
public class Coin {

    @Id @NotBlank
    private String market;

}
