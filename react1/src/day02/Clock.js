import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>안녕하세요</h1>
            {/* 자바스크립트의 시간 관련 클래스, 객체 생성 */}
            {/* 현재 지역을 기준으로 시간을 문자열로 출력 */}
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;