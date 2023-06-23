package com.bitc.asyncserver.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

// @CrossOrigin : 외부 서버의 접근을 허용하는 어노테이션, 클래스, 메소드에 사용 가능
//@CrossOrigin("http://localhost:3000")    // http//localhost:3000 외부 서버 접근 허용
@RestController // 컨트롤러 + 리스폰스바디
public class AsyncServer {

    @RequestMapping(value = "/async/data1", method = RequestMethod.GET) // value임 name이 아니라 주의
    public Object data1() {
        return "success";
    }
}
