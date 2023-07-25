import React from 'react';
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

function Layout(props) {

    return (
        <div>
            <Header title={'React'}/>
            {/*<BoardRouter/>*/}
            {/* 중첩 Route 사용 시 자식 Route 의 컴포넌트를 표시해주는 컴포넌트, index에는 BoardRouter(루터) 컴포넌트 적용, 루터 컴포넌트의 Routes에 Layout 컴포넌트를 element로 적용 */}
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;