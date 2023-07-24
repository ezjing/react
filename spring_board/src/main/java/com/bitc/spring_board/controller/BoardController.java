package com.bitc.spring_board.controller;

import com.bitc.spring_board.DTO.BoardDTO;
import com.bitc.spring_board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4000"})
@RequestMapping(value = "/board")
@RestController
public class BoardController {

    private final BoardService boardService;

    @RequestMapping(value = "/boardList", method = RequestMethod.GET)
    public Object getBoardList() throws Exception {
        List<BoardDTO> boardList = boardService.getBoardList();

        return boardList;
    }

    @RequestMapping(value = "/boardDetail", method = RequestMethod.GET) // 쿼리스트링 사용 시 ? 이후 주소 다버려야함
    public Object getBoardDetail(@RequestParam(value="idx") int boardIdx) throws Exception {
        BoardDTO boardDetail = boardService.getBoardDetail(boardIdx);

        return boardDetail;
    }

    @RequestMapping(value = "/boardEdit", method = RequestMethod.PUT)
    public Object updateBoardEdit(@RequestParam(value="idx") int boardIdx, @RequestParam String title, @RequestParam String updateId, @RequestParam String contents) throws Exception {
        boardService.updateBoardEdit(boardIdx, title, updateId, contents);
        return boardService.getBoardDetail(boardIdx);
    }

    @RequestMapping(value = "/boardDelete", method = RequestMethod.PUT)
    public void updateBoardDelete(@RequestParam(value="idx") int boardIdx) throws Exception {
        boardService.updateBoardDelete(boardIdx);
    }

    @RequestMapping(value = "/boardWrite", method = RequestMethod.POST)
    public void insertBoard(BoardDTO boardDTO) throws Exception {
        boardService.insertBoard(boardDTO);
    }
}
