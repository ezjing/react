package com.bitc.restapiserver.service;

import com.bitc.restapiserver.DTO.UserDTO;

import java.util.List;

public interface Quiz1Service {
    List<UserDTO> getUserList() throws Exception;

//    void insertUser(UserDTO user) throws Exception;

    void insertUser(String userId, String userPw, String userName, String userEmail) throws Exception;
}
