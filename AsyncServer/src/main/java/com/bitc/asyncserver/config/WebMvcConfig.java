package com.bitc.asyncserver.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // addMapping(url) : 지정한 패턴에 맞는 페이지에 대해서 접근 권한을 확인
        // allowedOrigins(url) : 접근을 허용할 외부 url
        registry.addMapping("/**")  // '/'루트 '첫번째 *' 바로아래 폴더 '두번째 *' 폴더의 파일
                .allowedOrigins("http://localhost:3000");   // 해당 주소에서의 접근 허용
    }
}
