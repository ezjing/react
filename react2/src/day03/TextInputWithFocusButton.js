import React, {useRef} from 'react';

function TextInputWithFocusButton() {
    // useRef를 사용하여 사용할 태그를 지정, 초기값을 null을 사용하여 빈 태그로 설정함
    const inputBox = useRef(null);

    const onButtonClick = () => {
        // ref로 지정한 태그에 포커스를 줌
        inputBox.current.focus();
    };

    return (
        <div className={'container'}>
            <input type="text" className={'form-control'}/>
            {/* jsx 문법을 사용하여 useRef에 태그를 지정 */}
            <input type="text" className={'form-control'} ref={inputBox} placeholder={'아래 버튼 클릭 시 포커스를 받는 태그'}/>  {/* ref에 해당 변수가 쓰면 그 태그가 레퍼런스로 지정됨 */}
            <button type={'button'} className={'btn btn-primary'} onClick={onButtonClick}>클릭 시 포커스 이동</button>
        </div>
    )
}

export default TextInputWithFocusButton;