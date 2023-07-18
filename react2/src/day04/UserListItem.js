import React, {useEffect, useState} from 'react';
import useUserStatus from "./useUserStatus";

// 사용자의 상태에 따라 사용자 아이디의 색상을 변경하는 컴포넌트
function UserListItem(props) {
    // 커스텀 훅 사용
    const isOnline = useUserStatus(props.user.id);

    // 커스텀 훅 미사용
    // useState 훅 사용
    // const [isOnline, setIsOnline] = useState(null);
    //
    // useEffect(() => {
    //     function handleStatusChange(status) {   // 콜백함수의 상태 받음
    //         setIsOnline(status.isOnline);
    //     }
    //
    //     // 서버에서 접속하여 지정한 사용자가 온라인인지 아닌지 확인하는 로직
    //     ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);   // ServerAPI.subscribeUserStatus 실행하면 id 확인하고, handleStatusChange 콜백함수 실행하여 useEffect 실행
    // });

    return (
        <li style={{color: isOnline ? 'green' : 'black'}}>{props.user.name}</li>
    )
}

export default UserListItem;