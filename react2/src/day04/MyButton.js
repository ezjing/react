import React from "react";

function MyButton(props) {
    // 이벤트 발생 시 실행할 함수
    // 매개변수로 2개의 데이터를 받음
    const handleDelete = (id, event) => {
        // 전달받은 이벤트에 target 속성을 사용 시 이벤트가 발생된 html 태그를 알려줌
        console.log(id, event.target);  // event.target은 html 태그를 통채로 들고옴
    }

    // 함수 컴포넌트에서 이벤트 발생 시 실행할 함수에 매개변수를 전달하고자 할 경우 이벤트 속성값에 콜백함수를 지정하고, 콜백함수에서 호출할 함수에 매개변수를 입력하여 전달함
    return (
        <div className={'container my-3'}>
            {/* onClick 속성에 콜백함수를 설정 */}
            {/* onClick 속성에 콜백함수 설정 시 매개변수를 지정하면 이벤트가 발생된 태그가 됨 */}
            <button type={'button'} className={'btn btn-primary me-2'} onClick={
                (event) => handleDelete(100, event)}>삭제하기</button>

            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                console.log('이벤트 발생')}}>
                삭제하기
            </button>
        </div>
    )
}

export default MyButton;