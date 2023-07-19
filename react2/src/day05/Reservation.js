import React, {useState} from "react";

function Reservation() {
    // form 태그에서 사용자 입력을 받는 input 태그가 2개 이므로 상태 관리를 위한 state로 설정된 변수도 2개
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);    
    
    // submit 이벤트 발생 시 실행할 함수
    const handleSubmit = e => {
        alert(`아침식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest}`);
        e.preventDefault();
    }
    
    return (
        <form action="" onSubmit={handleSubmit}>
            {/* 라벨태그의 자식태그로 input 태그를 쓰면 라벨의 옆에 인풋태그가 달린다 */}
            {/* checkbox로 동작하기 때문에 해당 태그가 선택되었는지 확인하기 위한 checked 속성에 state로 관리되는 변수(논리형 타입을 가졌음)를 대입함 */}
            {/* checkbox의 값 변경이 있을 경우 onchange 이벤트에 직접 콜백함수를 입력하여 처리 */}
            <label htmlFor="chk" className={'form-label'}>아침식사 여부 :
                {/* 상태가 바뀔때 checked 의 값을 setHaveBreakfast로 가져옴  */}
                <input type="checkbox" checked={haveBreakfast} id={'chk'} className={'form-check-input ms-2'} onChange={(e) => {
                setHaveBreakfast(e.target.checked);
                }}/>
            </label>
            <label htmlFor="count" className={'form-label ms-3'}>방문객 수 :
                <input type="number" value={numberOfGuest} id={'count'} className={'form-control'} onChange={(e) => {
                    setNumberOfGuest(e.target.value);
                }}/>
            </label>
            <button type={'submit'} className={'btn btn-primary ms-2'}>확인</button>
        </form>
    )
}

export default Reservation;