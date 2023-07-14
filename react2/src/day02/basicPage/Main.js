import React from "react";
import Col1 from "./Col1";
import Col2 from "./Col2";

// 함수는 바로 아래의 컴포넌트까지만 지정 되는듯
const styles = {
    fakeImg: {
        height: 200,
        background: '#aaa', // 색 지정할때도 문자열 이니까 '' 안에 넣어야함
    }
}

function Main() {
    return (
        <div className={'container mt-5'}>
            <div className={'row'}>
                <Col1 styles={styles.fakeImg}/>
                <Col2 styles={styles.fakeImg} data={100}/>
            </div>
        </div>
    )
}

export default Main;