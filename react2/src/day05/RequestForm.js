import React, {useState} from "react";

function RequestForm(props) {
    // useState를 사용하여 변수 value를 state(상태)로 설정
    const [value, setValue] = useState('요청사항을 입력하세요');

    // 이벤트 발생 시 동작할 함수 (한줄짜리이기 대문에 중괄호 생략 가능)
    const handleChange = (e) => setValue(e.target.value);   // e 는 이벤트가 생긴 시점을 의미. 이벤트가 발생 하였다는 정도


    const handleSubmit = e => {
        alert(`입력한 요청사항 : ${value}`);
        e.preventDefault();
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="comment" className={'form-label'}>요청사항 : </label>
            {/* 리액트는 textarea에서 value 속성 사용 가능 */}
            <textarea name="" id="comment" cols="" rows="5" className={'form-control'} onChange={handleChange} value={value}></textarea>
            <button type={'submit'} className={'btn btn-primary mt-2'}>확인</button>
        </form>
    )
}

export default RequestForm;