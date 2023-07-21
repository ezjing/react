package com.bitc.restapiserver.mapper;

import com.bitc.restapiserver.DTO.UserDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Quiz1Mapper {
    List<UserDTO> getUserList() throws Exception;

//    void insertUser(UserDTO user) throws Exception;

    void insertUser(String userId, String userPw, String userName, String userEmail) throws Exception;
}
