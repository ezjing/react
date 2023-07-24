import React from 'react';

function Header(props) {
    return (
        <div className="p-5 bg-primary text-white text-center">
            <h1>{props.title}</h1>
            <p>리액트 연습 게시판!</p>
        </div>
    )
}

export default Header;