package com.bitc.spring_board.DTO;

import lombok.Data;

@Data
public class BoardDTO {
    private int boardIdx;
    private String title;
    private String contents;
    private String createId;
    private String createDt;
    private String updateId;
    private String updateDt;
    private int hitCnt;
}
