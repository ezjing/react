package com.bitc.restapiserver.service;

import com.bitc.restapiserver.DTO.UserDTO;
import com.bitc.restapiserver.mapper.Quiz1Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor    // @Autowired 생략 가능
@Service
public class Quiz1ServiceImpl implements Quiz1Service {

    private final Quiz1Mapper quiz1Mapper;

    @Override
    public List<UserDTO> getUserList() throws Exception {
        return quiz1Mapper.getUserList();
    }

//    @Override
//    public void insertUser(UserDTO user) throws Exception {
//        quiz1Mapper.insertUser(user);
//    }

    @Override
    public void insertUser(String userId, String userPw, String userName, String userEmail) throws Exception {
        quiz1Mapper.insertUser(userId, userPw, userName, userEmail);
    }
}
