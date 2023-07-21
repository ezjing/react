package com.bitc.restapiserver.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4000"})
@RequestMapping(value = "/async")
@RestController
public class AsyncController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() throws Exception {
        return "index 페이지";
    }

    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4000"})  // 해당 주소에 대해서 접속 허락 하겠다
    @RequestMapping(value = "/sendDataGet", method = RequestMethod.GET)
    public Object sendDataGet() throws Exception {  // 일단 어떤 데이터를 줄지 몰라 예시로 object 타입으로 리턴타입을 정함
        Map<String, String> result = new HashMap<>();   // map을 쓰는 이유는 아직 DB와 연결이 안돼있기 때문

        result.put("result", "success");
        result.put("data", "axios를 이용한 비동기 통신");

        return result;  // object 타입으로 데이터가 넘어온다(axios 와 ajax 에서 사용하는 data의 기본 타입은 JSON 타입이다 study06 참고)
    }

    @RequestMapping(value = "/sendDataGetParam", method = RequestMethod.GET)
    public Object sendDataGetParam(@RequestParam("idx") int idx) {
        Map<String, String> result = new HashMap<>();
        result.put("result", "success");
        result.put("data", "100");

        return result;
    }

    @RequestMapping(value = "/sendDataPost", method = RequestMethod.POST)
    public Object sendDataPost(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw) throws Exception { // axios도  @RequestParam로 데이터 받음
        Map<String, String> user = new HashMap<>();

        user.put("userId", userId);
        user.put("userPw", userPw);

        Map<String, Object> result = new HashMap<>();
        result.put("result", "success");
        result.put("data", user);

        return result;
    }

    @RequestMapping(value = "/sendDataPut", method = RequestMethod.PUT)
    public Object sendDatePut(@RequestParam("idx") int idx) throws Exception {
        Map<String, Object> result = new HashMap<>();
        result.put("result", "success");
        result.put("idx", String.valueOf(idx));

        return result;
    }

    @RequestMapping(value = "/sendDataDelete", method = RequestMethod.DELETE)
    public Object sendDateDelete(@RequestParam("idx") int idx) throws Exception {
        Map<String, Object> result = new HashMap<>();
        result.put("result", "success");
        result.put("idx", idx);

        return result;
    }
}
