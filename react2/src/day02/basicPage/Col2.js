import React, {useState} from "react";
import Contents from "./Contents";

function Col2(props) {
    // 함수 MainContent의 매개변수로 전달된 데이터를 변수 styles 에 저장
    // 부모 컴포넌트에서 데이터를 전달받기 위한 props 객체는 읽기 전용(읽기 전용이라 수정되면 안됨)
    // props의 내용을 수정하여 사용하고자 할 경우 자식 컴포넌트에서 변수를 선언하고 props의 데이터를 대입 후 수정해야함(state 사용)
    const styles = props.styles;
    console.log(styles.height);  // 이런식으로 내부에 값을 가져와서 활용하는건 가능

    // props 객체의 값 자체를 변수에 대입하여 수정하는 것은 문제 없음
    const editStyle = { // 다른 변수에 저장해서 쓰기 가능
        height: props.styles.height + 100,
        backgroundColor: props.styles.backgroundColor,
    }

    // state 사용 예시
    const [data, setData] = useState(props.data);

    return (
        <div className={'col-sm-8'}>
            <Contents styles={styles}/>
            <Contents styles={editStyle}/>

            <button className={'btn btn-primary'} onClick={() => setData(data + 10)}>클릭</button>
        </div>
    )
}

export default Col2;