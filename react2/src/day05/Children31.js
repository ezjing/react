import React from "react";

function Children31(props) {
    // 부모 컴포넌트에서 전달받은 데이터
    const recData = props.data;
    // 부모 컴포넌트에서 전달받은 함수
    const recFunc = props.func;

    return (
        <div className={'border border-2 rounded rounded-3 p-2'}>
            <h3>자식 컴포넌트</h3>
            <h4>부모컴포넌트에서 전달된 데이터 : {recData}</h4>
            {/* 자식 컴포넌트의 버튼 클릭 시 recFunc 함수를 실행 */}
            <button type={'button'} className={'btn btn-primary'} onClick={recFunc}>클릭</button>
        </div>
    )
}

export default Children31;