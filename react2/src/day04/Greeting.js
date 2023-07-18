import React from "react";

// 함수 컴포넌트 (자식)
function UserGreeting(props) {
    return <h1>방문해 주셔서 갑사합니다.</h1>;
}

// 함수 컴포넌트 (자식)
function GuestGreeting(props) {
    return <h1>회원 가입이 필요합니다.</h1>
}

// 함수 컴포넌트 (부모)
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    // 조건부 렌더링
    if (isLoggedIn) {
        return <UserGreeting/>;
    }

    return <GuestGreeting/>;
}

export default Greeting;

// 한 파일에 여러개의 컴포넌트 써도 되지만 권장하진 않음