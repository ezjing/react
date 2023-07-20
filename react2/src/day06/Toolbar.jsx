import React from 'react';
import ThemedButton from "./ThemedButton";

function Toolbar(props) {

    return (
        <div>
            {/* 부모 컴포넌트에서 전달한 데이터를 현재 컴포넌트에서 사용하지 않고, 자식 컴포넌트를 호출하는데 사용함 */}
            <ThemedButton theme={props.theme}/>
        </div>
    )
}

export default Toolbar;