package com.bitc.restapiserver.controller;

import com.bitc.restapiserver.DTO.UserDTO;
import com.bitc.restapiserver.service.Quiz1Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor    // @Autowired 대신 사용
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4000"})  // webconfig 만들면 생략 가능
@RequestMapping(value = "/quiz1")
@RestController
public class Quiz1Controller {

    // @RequiredArgsConstructor 사용 시 final로 설정
    private final Quiz1Service quiz1Service;

    @RequestMapping(value = "/userList", method = RequestMethod.GET)
    public Object getUserList() throws Exception {
        List<UserDTO> userList = quiz1Service.getUserList();

        return userList;
    }

    @RequestMapping(value = "/signUp", method = RequestMethod.POST)
//    public Object insertUser(@RequestParam UserDTO user) throws Exception {
    public Object insertUser(@RequestParam String userId, @RequestParam String userPw, @RequestParam String userName, @RequestParam String userEmail) throws Exception {
//        quiz1Service.insertUser(user);
        quiz1Service.insertUser(userId, userPw, userName, userEmail);
        return null;
    }
}
