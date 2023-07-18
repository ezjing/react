import React, {useEffect, useState} from 'react';

// 커스텀 훅 생성하기
function useUserStatus(userId) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(userId, handleStatusChange);
    });

    return isOnline;
}

export default useUserStatus;