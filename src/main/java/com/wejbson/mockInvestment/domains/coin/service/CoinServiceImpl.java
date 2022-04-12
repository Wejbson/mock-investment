package com.wejbson.mockInvestment.domains.coin.service;

import com.wejbson.mockInvestment.domains.coin.dto.MarketListResDto;
import com.wejbson.mockInvestment.domains.coin.dto.MarketResDto;

import com.wejbson.mockInvestment.domains.coin.dto.UbtApiMakretAllResDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Description;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Slf4j
@Service
public class CoinServiceImpl implements CoinService{

    @Value("${upbit.api.url}")
    private String upbitApiUrl;

    @Autowired
    private RestTemplate restTemplate;

    @Description(value = "업비트 market 리스트 조회")
    @Override
    public List<MarketResDto> getMarketList() {

        List<MarketResDto> marketResDtoList = new ArrayList<MarketResDto>();

        // 업비트 market List API(/v1/market/all) 호출 영역
        UbtApiMakretAllResDto[] response = restTemplate.getForObject(upbitApiUrl + "/v1/market/all", UbtApiMakretAllResDto[].class);
        List<UbtApiMakretAllResDto> marketList = Arrays.asList(response);

        for(UbtApiMakretAllResDto ubtApiMakretAllResDto : marketList){
            // 한국 시장 데이터만 추출
            if(ubtApiMakretAllResDto.getMarket().startsWith("KRW")){
                // List에 추가
                marketResDtoList.add(MarketResDto.builder()
                        .market(ubtApiMakretAllResDto.getMarket())
                        .korName(ubtApiMakretAllResDto.getKorean_name())
                        .engName(ubtApiMakretAllResDto.getEnglish_name()).build());
            }
        }

        return marketResDtoList;
    }
}
