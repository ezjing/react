import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function BoardWrite(props) {
    const [title, setTitle] = useState('');
    const [createId, setCreateId] = useState('');
    const [contents, setContents] = useState('');

    const navigate = useNavigate();

    const handleWrite = (e) => {
        alert('작성되었습니다');
        axios.post('http://localhost:8080/jpa/boardWrite', null, {
            params: {
                title: title,
                createId: createId,
                contents: contents
            }
        })
            .then(res => {
                alert('작성되었습니다.');

                navigate('/board/boardList');
            })
            .catch(err => {
                console.log('edit', err);
            });
    }

    const handleCancel = (e) => {
        navigate('/board/boardList');
    }

    return (
        <div className={'container-sm my-4'}>
            <h2 className={'text-center my-3'}>글쓰기</h2>
            <div className={'input-group my-3'}>
                <span className={'input-group-text'}>글제목</span>
                <input type="text" className={'form-control'} id={'title'} name={'title'} value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className={'input-group my-3'}>
                <span className={'input-group-text'}>글쓴이</span>
                <input type="text" className={'form-control'} id={'userId'} name={'userId'} value={createId} onChange={(e) => setCreateId(e.target.value)}/>
            </div>
            <div className={'input-group my-3'}>
                <span className={'input-group-text'}>글내용</span>
                <textarea type="text" className={'form-control'} id={'contents'} name={'contents'} rows={'10'} value={contents} onChange={(e) => setContents(e.target.value)}></textarea>
            </div>
            <div className={'my-3 d-grid gap-3'}>
                <button type={'button'} className={'btn btn-primary'} onClick={handleWrite}>확인</button>
                <button type={'button'} className={'btn btn-secondary'} onClick={handleCancel}>취소</button>
            </div>
        </div>
    )
}

export default BoardWrite;