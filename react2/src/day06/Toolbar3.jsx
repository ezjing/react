import React from 'react';
import ThemedButton3 from "./ThemedButton3";

// 부모 컴포넌트에서 호출 시 데이터를 전달한 것이 없기 때문에 props가 비어있음
function Toolbar3(props) {

    return (
        // 자식 컴포넌트를 호출하는데 전달하는 데이터가 존재하지 않음
        <ThemedButton3/>
    )
}

export default Toolbar3;