import React from "react";

function Counter(props) {
    // 지역 변수 count 선언, 초기값으로 0을 설정
    let count = 0;

    return (
        <div className={'container'}>
            <p>총 {count} 번 클릭했습니다.</p>
            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                count++;
                console.log(`count : ${count}`);
            }}>클릭</button>
        </div>
    );
}

export default Counter;