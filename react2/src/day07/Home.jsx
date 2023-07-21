import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {

    return (
        <div>
            <h1>Home 페이지</h1>
            <p>가장 먼저 보여지는 페이지</p>

            {/*<Link to={'/about'}>소개 페이지</Link>*/}
            <Link to={'about'}>소개 페이지</Link>    {/* 부모 주소가 있을 때 */}
        </div>
    );
}

export default Home;