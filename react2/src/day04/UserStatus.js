import React, {useEffect, useState} from 'react';
import useUserStatus from "./useUserStatus";

// 사용자의 상태가 온라인인지 오프라인인지 표시하는 컴포넌트
function UserStatus(props) {
    // 커스텀 훅 사용
    const isOnline = useUserStatus(props.user.id);

    // 커스텀 훅 미사용
    // const [isOnline, setIsOnline] = useState(null);
    //
    // useEffect(() => {
    //     function handleStatusChange(status) {
    //         setIsOnline(status.isOnline);
    //     }
    //
    //     // 서버에 접속 중인지 확인하는 명령어
    //     ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    // });

    if (isOnline === null) {
        return '대기중...';
    }

    return isOnline ? '온라인' : '오프라인';
}

export default UserStatus;