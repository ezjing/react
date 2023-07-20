import React, {useState} from 'react';
import Dialog3 from "./Dialog3";

function SignUpDialog(props) {
    // useState를 사용하여 변수 nickName을 state로 설정
    const [nickName, setNickName] = useState('');

    // 이벤트 발생 시 동작할 콜백 함수 선언
    const handleChange = (e) => {
        setNickName(e.target.value);
    }

    const handleSignUp = () => {
        alert(`어서오세요, ${nickName}님`);
    }

    const handleCheckboxChange = () => alert('체크되었습니다.');

    return (
        // 컴포넌트 합성
        <div>
            <Dialog3 title={'화성 탐사 프로그램'} message={'닉네임을 입력하세요'}>
                <input type="nickName" className={'form-control'} onChange={handleChange}/>
                <button type={'button'} className={'btn btn-primary mt-2'} onClick={handleSignUp}>가입하기</button>
            </Dialog3>

            <Dialog3 title={'심해 탐사 프로그램'} message={'닉네임을 입력하세요'}>
                <input type="nickName" className={'form-control'} onChange={handleChange}/>
                <label htmlFor="chk" className={'form-label me-3'}>18세 이상 :
                    <input type="checkbox" id={'chk'} className={'form-check-input'} onChange={handleCheckboxChange}/>
                </label>
                <button type={'button'} className={'btn btn-primary mt-2'} onClick={handleSignUp}>가입하기</button>
            </Dialog3>
        </div>
    )
}

export default SignUpDialog;