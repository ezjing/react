import React from "react";

function formatDate(dt) {
    return dt.toLocaleString();
}

// 부모 컴포넌트에서 전달받은 데이터가 props에 저장됨
// props는 object 타입임
function Comment(props) {
    return (
        <div className={'comment'}>
            <div className={'user-info'}>
                {/* 컴포넌트 추출 */}
                <img className={'avatar'} src={props.author.avatarUri} alt={props.author.name}/>
                <div className={'user-info-name'}>{props.author.name}</div>
            </div>

            <div className={'comment-text'}>{props.text}</div>

            {/*formatDate() 함수를 실행*/}
            <div className={'comment-date'}>{formatDate(props.date)}</div>
        </div>
    );
}

export default Comment;