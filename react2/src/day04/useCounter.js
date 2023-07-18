import React, {useState} from 'react';

// 커스텀 훅 생성
function useCounter(initValue) {
    // useState를 사용하여 변수 count를 state로 설정
    const [count, setCount] = useState(initValue);

    const incrementCount = () => setCount((count) => count + 1);    // 방법 1.
    // const incrementCount = () => {    // 방법 2. 단일 실행(실행내용이 한줄)인 경우 {} 생략. 지금 모양은 콜백함수가 두번 사용된 모양
    //     return (
    //         setCount((count) => {
    //             return count + 1
    //         })
    //     );
    // };
    const decrementCount = () => setCount((count) => Math.max(count - 1, 0));   // 방법 1. 0 이하로 안내려가게 설멍하는 함수 같음
    // const decrementCount = () => {   // 방법 2.
    //     return setCount((count) => {
    //         return Math.max(count - 1, 0)   // 최소값 0 설정
    //     })
    // };

    // 배열로 반환, 0번 index는 현재 count, 1번 index는 count up, 2번 index는 count down
    return [count, incrementCount, decrementCount];
}

export default useCounter;