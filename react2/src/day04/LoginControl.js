import React, {useState} from "react";

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

function LoginControl(props) {
    // useState 사용
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 클릭 이벤트용 함수
    const handleLoginClick= () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }
    
    // 엘리먼투 변수 선언, 실제로는 그냥 일반 변수
    let button;

    // 조건부 렌더링 연산, staate인 isLoggedIn 의 값이 false일 경우에 따라서 변수 button에 저장되는 컴포넌트가 변경됨
    if (isLoggedIn) {   // 로그인 상태면 logout 버튼 출력
        button = <LogoutButton onClick={handleLogoutClick}/>
    }
    else {  // 로그인 상태 X login 버튼 출력
        button = <LoginButton onClick={handleLoginClick}/>
    }
    return (
        <div className={'container mt-4'}>
            {button}
        </div>
    )

    // 엘리먼트 변수를 사용하지 않고 직접 자식 컴포넌트를 호출할 경우
    // if (isLoggedIn) {
    //     return (
    //         <div className={'container mt-4'}>
    //             <LogoutButton onClick={handleLogoutClick} />
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div className={'container mt-4'}>
    //             <LoginButton onClick={handleLoginClick} />
    //         </div>
    //     )
    // }
}

export default LoginControl;