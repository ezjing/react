import React from 'react';

function FancyBorder(props) {

    return (
        // 부모 컴포넌트에서 전달한 html 태그를 출력하고자 할 경우 props.children으로 출력할 수 있음
        <div className={'border border-2 border-info m-3 p-3 FancyBorder FancyBorder-' + props.color}>
            <h4 className={'mb-3'}>자식 컴포넌트 영역</h4>
            {props.children}    {/* children은 내장 함수같고, html형식으로 자식 컴포넌트를 선언했을때 그 자식태그로 들어간 태그들을 호출함 */}
        </div>
    )
}

export default FancyBorder;