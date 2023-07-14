import React from 'react';
import Profile from "./Profile";

// Profile의 부모가 되는 컴포넌트
function Car(props) {
    return (
        <div>
            {/* 자식 컴포넌트인 Profile을 3번 호출 */}
            {/* 각 컴포넌트마다 속성값을 4개 전달함 */}
            {/* 문자열은 "" '' {} 다 사용 가능 그 외 타입은 {}만 사용 */}
            <Profile name="토레스" type="SUV" price={3000} ele={false} />
            <Profile name='코나' type='SUV' price={4000} ele={true} />
            <Profile name={'그랜저'} type={"세단"} price={6000} ele={false} />
        </div>
    )
}

export default Car;