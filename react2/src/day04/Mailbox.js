import React from "react";

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;

    return (
        <div className={'container'}>
            <h1>안녕하세요</h1>
            {
                unreadMessages > 0
                &&
                <h2>현재 {unreadMessages}개의 읽지 않은 메일이 있습니다.</h2>
            }
        </div>
    )
}

export default Mailbox;