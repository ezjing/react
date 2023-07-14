import React from "react";

// 컴포넌트 파일명(Book)은 반드시 첫글자가 대문자이어야 함
// 리액트에서는 컴포넌트를 사용하여 화면을 생성함
// 리액트에서 <> 안에 명문 소문자로 되어 있으면 html 태그로 인식 (리액트 첫글자 반드시 대문자여야 하는 이유)
// <> 안에 영문 대문자로 시작하면 컴포넌트로 인식함
function Book(props) {
    return (    // 순서 App2 -> Library -> Book 그래서 h1, h2 태그들은 div 3개에 감싸져 있다(id가 root 인 div 제외), 관리자모드 Components로 정확한 확인 가능(내용 편집도 가능)
        <div>
            <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
            <h2>{`이 책의 가격은 ${props.price}원 입니다.`}</h2>
        </div>
    )
}

export default Book;