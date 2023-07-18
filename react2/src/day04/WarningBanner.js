import React from "react";

function WarningBanner(props) {
    // 부모에게서 전달받은 데이터를 사용하여 조건에 따라 반환값을 null 혹은 html을 출력
    // 전달 받은 데이터가 있으면 if 문 실행 안함, 데이터가 없으면 null을 반환
    if (!props.warning) {   // false 값이 들어오게 되면 !에 의해 true가 되면서 경고!! 문구가 보이지 않게 됨
        return null;
    }

    return (
        <div className={'container'}>
            <h2>경고!!</h2>
        </div>
    );
}

export default WarningBanner;