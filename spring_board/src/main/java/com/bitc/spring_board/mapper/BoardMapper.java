package com.bitc.spring_board.mapper;

import com.bitc.spring_board.DTO.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<BoardDTO> getBoardList() throws Exception;

    BoardDTO getBoardDetail(int boardIdx) throws Exception;

    void updateBoardDelete(int boardIdx) throws Exception;

    void updateBoardEdit(int boardIdx, String title, String updateId, String contents) throws Exception;

    void insertBoard(BoardDTO boardDTO) throws Exception;

    void upHitCnt(int boardIdx) throws Exception;
}
