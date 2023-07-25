import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useSearchParams} from "react-router-dom";

function BoardDetail(props) {
    // 파라미터 값을 자동으로 파싱하여 데이터를 가져옴
    const [params, setParams] = useSearchParams();  // 주소 : http://localhost:3000/board/boardDetail?idx=2
    console.log(`useSearchParams()로 가져온 데이터`);
    console.log(params);
    console.log(params.get('idx'));

    const boardIdx = params.get('idx');

    useEffect(() => {

        axios.get(`http://localhost:8080/jpa/boardDetail?idx=${boardIdx}`)
            .then(res => {
                const list = res.data;

                setUserDetail(list);


            })
            .catch(err => {
                alert('통신중 오류가 발생했습니다.' + {boardIdx})
                console.log(err);
            });
    }, []);

    const [userDetail, setUserDetail] = useState([]);
    const [title, setTitle] = useState('');
    const [hitCnt, setHitCnt] = useState('');
    const [createId, setCreateIe] = useState('');
    const [createDt, setCreateDt] = useState('');
    const [updateId, setUpdateId] = useState('');
    const [updateDt, setUpdateDt] = useState('');
    const [contents, setContents] = useState('');

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleUpdateIdChange = (e) => setUpdateId(e.target.value);
    const handleContentsChange = (e) => setContents(e.target.value);

    const navigate = useNavigate();

    const handleList = () => {
        navigate('/board/boardList');
    }

    const handleEdit = () => {
        axios.put('http://localhost:8080/jpa/boardEdit', null, {
            params: {
                idx: boardIdx,
                title: title,
                updateId: updateId,
                contents: contents
            }
        })
            .then(res => {
                alert('수정되었습니다.');
                const list = res.data;

                setUserDetail(list);
            })
            .catch(err => {
                console.log('edit', err);
            });
    }

    const handleDelete = (e) => {
        axios.put('http://localhost:8080/jpa/boardDelete', null, {
            params: {
                idx: boardIdx
            }
        })
            .then(res => {
                alert('삭제되었습니다.');

                navigate('/board/boardList');
            })
            .catch(err => {
                console.log('delete', err);
            });
    }



    return (
        <div className={'container-sm my-4'}>
            <h2 className={'text-center my-3'}>게시판 내용</h2>
            {/*<form action="/board/boardUpdate" onSubmit={handleSubmit}>*/}    {/* form 없이 rest api 사용하면 쿼리스트링으로 넘어감!!!!! */}
                <div className={'row my-3'}>
                    <div className={'col-sm'}>
                        <div className={'input-group'}>
                            <span className={'input-group-text'}>글번호</span>
                            <input type="text" className={'form-control'} id={`boardIdx`} value={userDetail.boardIdx} name={'boardIdx'} readOnly={true}/>
                        </div>
                    </div>
                    <div className={'col-sm-6'}>
                        <div className={'input-group'}>
                            <span className={'input-group-text'}>글제목</span>
                            <input type="text" className={'form-control'} id={`title`} defaultValue={userDetail.title} name={'title'} onChange={handleTitleChange}/>    {/*  defaultValue : 일반 HTML 태그에서 쓰는 수정가능한 value가 됨 */}
                        </div>
                    </div>
                    <div className={'col-sm'}>
                        <div className={'input-group'}>
                            <span className={'input-group-text'}>조회수</span>
                            <input type="text" className={'form-control'} id={`hinCnt`} name={'hinCnt'} value={userDetail.hitCnt} readOnly={true}/>
                        </div>
                    </div>
                </div>
                <div className={'row my-3'}>
                    <div className={'col-sm'}>
                        <div className={'input-group'}>
                            <span className={'input-group-text'}>작성자</span>
                            <input type="text" className={'form-control'} id={`createId`} name={'createId'} value={userDetail.createId} readOnly={true}/>
                        </div>
                    </div>
                    <div className={'col-sm'}>
                        <div className={'input-group'}>
                            <span className={'input-group-text'}>등록일</span>
                            <input type="text" className={'form-control'} id={`createDt`} name={'createDt'} value={userDetail.createDt} readOnly={true}/>
                        </div>
                    </div>
                    <div className={'col-sm'}>
                        <div className={'input-group'}>
                            <span className={'input-group-text'}>수정자</span>
                            <input type="text" className={'form-control'} id={`updateId`} name={'updateId'} defaultValue={userDetail.updateId} onChange={handleUpdateIdChange}/>
                        </div>
                    </div>
                    <div className={'col-sm'}>
                        <div className={'input-group'}>
                            <span className={'input-group-text'}>수정일</span>
                            <input type="text" className={'form-control'} id={`updateDt`} name={'updateDt'} value={userDetail.updateDt} placeholder={'자동으로 입력됩니다.'} readOnly={true}/>
                        </div>
                    </div>
                </div>
                <div className={'row my-3'}>
                    <div className={'col-sm'}>
                        <span className={'input-group-text'}>본문</span>
                        <textarea name="contents" id="contents" rows="10" className={'form-control'} defaultValue={userDetail.contents} onChange={handleContentsChange}></textarea>
                    </div>
                </div>
                <div className={'row my-3'}>
                    <div className={'col-sm'}>
                        <div className={'input-group'}>
                            <button type={'button'} className={'btn btn-secondary'} id={'btn-list'} onClick={handleList}>목록</button>
                        </div>
                    </div>
                    <div className={'col-sm d-flex justify-content-end'}>
                        <button type={'button'} className={'btn btn-danger me-2'} id={'btn-delete'} onClick={handleDelete}>삭제</button>
                        <button type={'button'} className={'btn btn-warning'} id={'btn-edit'} onClick={handleEdit}>수정</button>
                    </div>
                </div>
            {/*</form>*/}
        </div>
    )
}

export default BoardDetail;