import React, {useState} from "react";
import Children2 from "./Children2";

function Parent2() {
    // useState를 사용하여 변수 data를 state로 설정
    // state로 설정된 변수 data의 값을 변경하려면 setData라는 함수를 사용해야 함
    const [data, setData] = useState('');

    return (
        <div>
            {/* 자식 컴포넌트 호출 시 자식 컴포넌트에 속성명을 지정하여 자식 컴포넌트의 props에 데이터를 전달 */}
            {/* 자식 컴포넌트의 props에 데이터가 아닌 자신의 state를 수정할 수 있는 setState 함수를 추가하여 자식 컴포넌트로 전달 */}
            {/* setData 함수 자체를 넘김 */}
            <Children2 setData={setData}/>
            <h3>전달받은 데이터 : {data}</h3>
        </div>
    )
}

export default Parent2;