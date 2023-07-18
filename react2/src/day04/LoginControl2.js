import React, {useState} from "react";
import Greeting from "./Greeting";

// 자식 컴포넌트
function LoginButton(props) {
    return (
        <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그인</button>
    );
}

// 자식 컴포넌트
function LogoutButton(props) {
    return (
        <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그아웃</button>
    );
}

function LoginControl2(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <div className={'container'}>
            <Greeting isLoggedIn={isLoggedIn}/>
            {   // 삼항연산자 사용
                isLoggedIn
                ? <LogoutButton onClick={handleLogoutClick}/>
                : <LoginButton onClick={handleLoginClick}/>
            }
        </div>
    )
}

export default LoginControl2