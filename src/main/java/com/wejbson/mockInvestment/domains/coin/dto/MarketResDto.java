package com.wejbson.mockInvestment.domains.coin.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class MarketResDto {

    private String market;

    private String korName;

    private String engName;

    @Builder
    public MarketResDto (String market, String korName, String engName){
        this.market = market;
        this.korName = korName;
        this.engName = engName;
    }
}
