import React, {useState} from "react";

function ConfirmButtonFunction(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    
    const handleConfirm = () => {
        setIsConfirmed((prevState) => !prevState);  // 이전 값을 이전 값과 다른 값으로 바꾸란 뜻. false => true
    }
    
    return (
        <button type={'button'} className={'btn btn-primary'} onClick={handleConfirm} disabled={isConfirmed}>{isConfirmed ? '확인됨' : '확인하기'}</button>
    )
}

export default ConfirmButtonFunction;