import React, {useState} from "react";
import WarningBanner from "./WarningBanner";

function MainPage(props) {
    // showWarning를 state로 설정
    const [showWarning, setShowWarning] = useState(false);

    // 클릭 이벤트 발생 시 실행할 함수
    const handleToggleClick = () => {
        // setState를 이용하여 state로 설정된 변수의 값을 변경
        // 이전 설정값을 반대값으로 state 값을 변경
        setShowWarning((prevShowWarning) => !prevShowWarning);
    }

    return (
        <div className={'container'}>
            {/* 자식 컴포넌트를 호출 */}
            {/* 매개변수로 showWarning의 값을 전달함 */}
            <WarningBanner warning={showWarning}/>
            {/* 클릭 이벤트 설정함 */}
            <button type={'button'} className={'btn btn-primary'} onClick={handleToggleClick}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    )
}

export default MainPage;