import React from "react";
import Reply from "./Reply";

const replys = [
    {name: '카즈하', content: '첫번째 댓글입니다.'},
    {name: '김경아', content: '두번째 댓글입니다.'},
    {name: '이지징', content: '세번째 댓글입니다.'},
];

function ReplyList(props) {
    return (
        <div>
            {
                replys.map((reply) => { // react의 map은 반환값이 있는 반복문의 기능. for 문도 사용 가능
                    return (
                        <Reply name={reply.name} content={reply.content}/>
                    );
                })
            }

            {/*<Reply name={replys[0].name} content={replys[0].content} />*/}
            {/*<Reply name={replys[1].name} content={replys[1].content} />*/}
            {/*<Reply name={replys[2].name} content={replys[2].content} />*/}

            {/*<Reply name={'카즈하'} content={'카즈하 이뻐요'} />*/}
            {/*<Reply name={'김경아'} content={'아니야 윈터가 더 이뻐'} />*/}
            {/*<Reply name={'이지징'} content={'발 닦고 자자'} />*/}
        </div>
    )
}

export default ReplyList;