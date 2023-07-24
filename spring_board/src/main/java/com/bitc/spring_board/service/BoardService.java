package com.bitc.spring_board.service;

import com.bitc.spring_board.DTO.BoardDTO;

import java.util.List;

public interface BoardService {
    List<BoardDTO> getBoardList() throws Exception;

    BoardDTO getBoardDetail(int boardIdx) throws Exception;

    void updateBoardDelete(int boardIdx) throws Exception;

    void updateBoardEdit(int boardIdx, String title, String updateId, String contents) throws Exception;

    void insertBoard(BoardDTO boardDTO) throws Exception;
}
