import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";  // axios 사용할때 무조건 모듈 깔고 진행하기(Cannot find module 'axios')

function BoardList(props) {
    let [userList, setUserList] = useState([]);

    // useEffect()를 사용하여 화면이 마운트 된 후 자동 실행
    useEffect(() => {
        axios.get('http://localhost:8080/jpa/boardList')
            .then(res => {
                const list = res.data;

                setUserList(list);
                })
            .catch(err => {
                alert('통신중 오류가 발생했습니다.')
                console.log(err);
            });
    }, []);

    const navigate = useNavigate();

    return (
        <div className={'container-sm my-4'}>
            <div className={'row'}>
                <div className={'col-8 mx-auto'}>
                    <h2 className={'text-center my-3'}>게시판 목록</h2>
                    <table className={'table table-hover table-striped'}>
                        <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일자</th>
                            <th>조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            userList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.boardIdx}</td>
                                        <td><Link to={`/board/boardDetail?idx=${item.boardIdx}`} className={'text-decoration-none'}>{item.title}</Link></td>
                                        <td>{item.createId}</td>
                                        <td>{item.createDt}</td>
                                        <td>{item.hitCnt}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <div className={'col-sm d-flex justify-content-end'}>
                        <button type={'button'} className={'btn btn-primary'} id={'btn-edit'} onClick={() => navigate('/board/boardWrite')}>글쓰기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardList;