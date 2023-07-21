import React, {useEffect, useState} from 'react';
import axios from "axios";

function UserList(props) {

    let [userList, setUserList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/quiz1/userList')
            .then(res => {
                const list = res.data;    // userList에 리스트 형식으로 들어왔을것임

                // setState 함수를 통해서 state로 등록된 userList 변수를 수정함
                setUserList(list);
            })
            .catch(err => {
                alert('통신중 오류가 발생했습니다.')
                console.log(err);
            });
    }, []); // [] 가 빠지면 통신이 안된다. 없으면 무슨 차이었던지 확인하기

    return (
        <div className={'row'}>
            <div className={'col-sm mx-auto'}>
                <table className={'table table-striped table-hover'}>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>pw</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        userList.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.userId}</td>
                                    <td>{item.userPw}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.userEmail}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList;