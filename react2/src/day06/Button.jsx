import React from 'react';

function Button(props) {

    return (
        // 부모 컴포넌트에서 전달된 theme 속성값을 사용함
        <button type={'button'} className={`btn btn-${props.theme}`} onClick={() => {
            alert(`사용한 테마 : ${props.theme}`);
        }}>{props.theme} 테마 버튼</button>
    )
}

export default Button;