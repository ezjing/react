import React, {useEffect, useState} from 'react';
import useCounter from "./useCounter";

// 최대값 설정(MAX_CAPACITY)
const MAX_CAPACITY = 10;

function Accommodate(props) {
    // useState hook 사용
    const [isFull, setIsFull] = useState(false);    // 불리언 타입으로 출력됨
    // 커스텀 훅 사용, 커스텀 훅에서 반환한 변수 및 함수를 전개연산 통해서 각각의 변수에 대입함
    const [count, increaseCount, decreaseCount] = useCounter(0);    // ES6 전개 연산법. 왼쪽이 진짜 배열, 오른쪽은 순서대로 배열에 넣어주는 역할. useCounter는 실직적으로 [count, incrementCount, decrementCount];이고 const 변수 = function() 과 같다. useCounter에 있는 변수와 함수가 넘어오게 되는것

    // useEffect hook 사용, 무조건 화면 재랜더링
    useEffect(() => {
        console.log("------------------------------------");
        console.log("useEffect() 호출!!");
        console.log(`isFull : ${isFull}`);
    }); // 의존성 배열을 전혀 작성하지 않아도 변경사항 생길 때 마다 계속 실행됨(한번만 실행할 경우 빈배열 넣으면 됨)

    // useEffect hook 사용, 의존성 배열에 지정한 count 의 값이 변경 시 실행
    useEffect(() => {
        // 변수 isFull의 값을 수정하기 위한 setState
        // 변수 count의 값이 MAX_CAPACITY의 값과 같으면 true, 아니면 false
        setIsFull(count >= MAX_CAPACITY);   // count가 전역변수로 지정한 MAX_CAPACITY보다 크거나 같으면 true
        console.log(`현재 count 값 : ${count}`);   // 현재 count 값 출력
    }, [count])

    return (
        <div className={'container p-3'}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button type={'button'} className={'btn btn-primary'} onClick={increaseCount} disabled={isFull}>입장</button>
            <button type={'button'} className={'btn btn-warning ms-2'} onClick={decreaseCount}>퇴장</button>

            {/* isFull의 값이 true일 경우에만 && 연산자 뒤의 태그(엘레먼트)가 화면에 그려짐 */}
            {isFull && <p className={'text-danger'}>정원이 가득찼습니다.</p>}    {/* &&(and) 연산을 이용한 isFull이 true인 경우 출력되는 형태. 즉 count 가 10이상일 때 출력 */}
        </div>
    );
}

export default Accommodate;