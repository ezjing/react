import React from 'react';
import ThemeContext from "./ThemeContext";
import Button3 from "./Button3";


// 부모 컴포넌트에서 호출 시 데이터를 전달한 것이 없기 때문에 props가 비어있음
function ThemedButton3(props) {

    return (
        // Context의 Consumer를 통해서 Context에 저장된 데이터를 가져옴
        <ThemeContext.Consumer>
            {/* 가져온 데이터를 자식 컴포넌트에 전달함 */}
            {value => <Button3 theme={value}/>}
        </ThemeContext.Consumer>
    )
}

export default ThemedButton3;