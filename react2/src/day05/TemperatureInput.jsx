import React from 'react';

const scaleNames = {
    c: '섭씨',
    f: '화씨',
}

function TemperatureInput(props) {
    // 이벤트 발생 시 동작할 함수
    // 부모 컴포넌트에서 전달받은 함수를 실행, 매개변수로 자식 컴포넌트의 input 태그의 현재 value 값을 사용함
    const handleChange = e => props.onTemperatureChange(e.target.value);

    return (
        <fieldset>
            {/* 부모 컴포넌트에서 전달한 단위 정보를 화면에 출력 */}
            <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]})</legend>
            {/* 부모 컴포넌트에서 전달한 온도를 value 속성에 대입 */}
            {/* onChange 이벤트 발생 시 handleChange 함수 실행 */}
            <input type="text" className={'form-control'} value={props.temperature} onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInput;