import React from 'react';
import SignUp from "./UserList";
import UserList from "./SignUp";

// 문제 1) axios를 사용하여 회원 정보 목록을 출력하는 페이지를 작성하세요
// 화면 로드 시 바로 회원 목록 정보를 가져와야 함 (useEffect 사용)
// DB의 user 테이블 사용

// 문제 2) 동일한 페이지에서 axios를 사용하여 사용자를 추가하는 페이지를 추가하세요
function Quiz1(props) {

    return (
        <div>
            <SignUp/>
            <UserList/>
        </div>
    );
}

export default Quiz1;