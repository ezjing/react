package com.bitc.spring_board.service;

import com.bitc.spring_board.DTO.BoardDTO;
import com.bitc.spring_board.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService{

    private final BoardMapper boardMapper;

    @Override
    public List<BoardDTO> getBoardList() throws Exception {
        return boardMapper.getBoardList();
    }

    @Override
    public BoardDTO getBoardDetail(int boardIdx) throws Exception {
        boardMapper.upHitCnt(boardIdx);
        return boardMapper.getBoardDetail(boardIdx);
    }

    @Override
    public void updateBoardDelete(int boardIdx) throws Exception {
        boardMapper.updateBoardDelete(boardIdx);
    }

    @Override
    public void updateBoardEdit(int boardIdx, String title, String updateId, String contents) throws Exception {
        boardMapper.updateBoardEdit(boardIdx, title, updateId, contents);
    }

    @Override
    public void insertBoard(BoardDTO boardDTO) throws Exception {
        boardMapper.insertBoard(boardDTO);
    }
}
