import React from "react";
import Children from "./Children";

// 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달(기존 방법)
function Parent(props) {
    return (
        <div>
            {/* 데이터 직접 전달 */}
            <Children data={'부모 컴포넌트 데이터'}/>
        </div>
    )
}

export default Parent;