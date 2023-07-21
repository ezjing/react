import React, {useState} from 'react';
import axios from "axios";

function SignUp(props) {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const user = [userId, userPw, userName, userEmail];

    const handleUserIdChange = (e) => setUserId(e.target.value);
    const handleUserPwChange = (e) => setUserPw(e.target.value);
    const handleUserNameChange = (e) => setUserName(e.target.value);
    const handleUserEmailChange = (e) => setUserEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/quiz1/signUp', JSON.stringify(user), {    // data 위치에 config의 내용을 넣으면 dto 로 넘어간다고 함
            params: {
                userId: userId,
                userPw: userPw,
                userName: userName,
                userEmail: userEmail

                // user: user
            }
        })
            .then(res => {
                alert('회원가입 되었습니다');

                // eslint-disable-next-line no-restricted-globals
                location.reload();
            })
            .catch(err => {
                alert('통신중 오류가 발생했습니다.')
                console.log(err);
            });
    };

    return (
        <form action={'/quiz1/signUp'} method={'post'} onSubmit={handleSubmit}>
            <label htmlFor="userId">id : </label>
            <input type="text" className={'form-control'} id={'userId'} value={userId} placeholder={'id'} onChange={handleUserIdChange}/>
            <label htmlFor="userPw">pw : </label>
            <input type="password" className={'form-control'} id={'userPw'} value={userPw} placeholder={'pw'} onChange={handleUserPwChange}/>
            <label htmlFor="userName">name : </label>
            <input type="text" className={'form-control'} id={'userName'} value={userName} placeholder={'name'} onChange={handleUserNameChange}/>
            <label htmlFor="userEmail">email : </label>
            <input type="text" className={'form-control'} id={'userEmail'} value={userEmail} placeholder={'email'} onChange={handleUserEmailChange}/>

            <button type={'submit'} className={'btn btn-primary'}>확인</button>

        </form>
    )
}

export default SignUp;