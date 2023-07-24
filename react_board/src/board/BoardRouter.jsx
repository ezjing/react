import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'   // npm install react-router-dom 설치 하기
import BoardList from "./BoardList";
import BoardDetail from "./BoardDetail";
import Layout from "../layout/Layout";
import BoardWrite from "./BoardWrite";
import ErrorPage from "./ErrorPage";

function BoardRouter(props) {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/board'} element={<Layout/>}>
                    <Route path={'boardList'} element={<BoardList/>}></Route>
                    <Route exact path={'boardDetail'} element={<BoardDetail/>}></Route>    {/* exact는 url이 완벽하게 매칭되어야 한다고 지정한것 /idx=:boardIdx*/}
                    <Route path={'boardWrite'} element={<BoardWrite/>}></Route>
                    <Route path={'*'} element={<ErrorPage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default BoardRouter;