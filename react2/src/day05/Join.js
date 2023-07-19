import React, {useState} from "react";

// 문제 1) 회원 가입 페이지를 작성하세요
// id, 비밀번호, 이름, email, 휴대전화 정보를 입력받고 확인 버튼 클릭 시 console이나 alert로 결과를 출력하는 프로그램

function Join() {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userGender, setUserGender] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');


    const handleSubmit = (e) => {
        alert(`회원 정보
id : ${userId}
pw : ${userPw}
성별 : ${userGender}
이름 : ${userName}
email : ${userEmail}
휴대전화 : ${userPhone}`);
        e.preventDefault();
    }

    return (
        <div className={'container-sm'}>
            <h3>회원 가입</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <label htmlFor="id" className={'form-label'}>id :
                            <input type="text" className={'form-control'} id={'id'} value={userId} placeholder={'아이디를 입력하세요'} onChange={(e) => {setUserId(e.target.value)}}/>
                        </label>
                    </div>
                    <div className={'col-4'}>
                        <label htmlFor="pw" className={'form-label'}>pw :
                            <input type="password" className={'form-control'} id={'pw'} value={userPw} placeholder={'비밀번호를 입력하세요'} onChange={(e) => {setUserPw(e.target.value)}}/>
                        </label>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-4 d-flex justify-content-center align-items-center'}>
                        <label htmlFor="male" className={'form-check-label'}>남자 :
                            <input type="radio" className={'form-check-input ms-2'} id={'male'} name={'gender'} value={'남자'} onChange={(e) => {setUserGender(e.target.value)}}/>
                        </label>
                        <label htmlFor="female" className={'form-check-label ms-3'}>여자 :
                            <input type="radio" className={'form-check-input ms-2'} id={'female'} name={'gender'} value={'여자'} onChange={(e) => {setUserGender(e.target.value)}}/>
                        </label>
                    </div>
                    <div className={'col-4'}>
                        <label htmlFor="name" className={'form-label'}>이름 :
                            <input type="text" className={'form-control'} id={'name'} value={userName} placeholder={'이름을 입력하세요'} onChange={(e) => {setUserName(e.target.value)}}/>
                        </label>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <label htmlFor="email" className={'form-label'}>email :
                            <input type="text" className={'form-control'} id={'email'} value={userEmail} placeholder={'이메일을 입력하세요'} onChange={(e) => {setUserEmail(e.target.value)}}/>
                        </label>
                    </div>
                    <div className={'col-4'}>
                        <label htmlFor="phone" className={'form-label'}>휴대전화 :
                            <input type="text" className={'form-control'} id={'phone'} value={userPhone} placeholder={'휴대전화 입력하세요'} onChange={(e) => {setUserPhone(e.target.value)}}/>
                        </label>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'d-grid col-8'}>
                        <button type={'submit'} className={'btn btn-primary'}>확인</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Join;