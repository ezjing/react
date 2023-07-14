import React from "react";

// Car의 자식 컴포넌트
function Profile(props) {
    return (
        <div>
            <p>이름 : {props.name}</p>
            <p>차종 : {props.type}</p>
            <p>연봉 : {props.price}</p>
            <p>전기차 : {props.ele}</p>
        </div>
    )
}

export default Profile;