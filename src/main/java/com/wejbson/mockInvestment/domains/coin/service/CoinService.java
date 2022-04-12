package com.wejbson.mockInvestment.domains.coin.service;

import com.wejbson.mockInvestment.domains.coin.dto.MarketListResDto;
import com.wejbson.mockInvestment.domains.coin.dto.MarketResDto;
import org.springframework.context.annotation.Description;

import java.util.List;

public interface CoinService {

    @Description(value = "업비트 market 리스트 조회")
    public List<MarketResDto> getMarketList();
}
