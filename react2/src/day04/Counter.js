import React from "react";

function Counter(props) {
    const count = 0;

    return (
        <div className={'container'}>
            {   // 원래 나오면 안되는데 0이 출력됨
                count
                &&
                <h1>현재 카운트 : ${count}</h1>
            }
        </div>
    )
}

export default Counter;