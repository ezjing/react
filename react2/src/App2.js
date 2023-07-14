import React from "react";
import WelcomeFunc from "./day02/WelcomeFunc";
import WelComeClass from "./day02/WelComeClass";
import Comment from "./day02/Comment";
import Comment2 from "./day02/Comment2";
import ReplyList from "./day02/ReplyList";
import BootstrapCDN from "./day02/BootstrapCDN";
import BootstrapReact from "./day02/BootstrapReact";

const data = {
    avatarUri: 'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/05/02/9dbf1b16-c77e-4724-b762-9abffcd7fde7.jpg',
    name: '카즈하',
}

function App2() {
    return (
        <div>
            {/* 컴포넌트 합성 */}
            <h1>함수 컴포넌트 사용</h1>
            <WelcomeFunc name={'리액트'}/>
            <hr/>
            <h1>클래스 컴포넌트 사용</h1>
            <WelComeClass name={'리액트'}/>

            <hr/>
            {/* 자식 컴포넌트 Comment 호출 */}
            {/* 속성 author, text, date 를 전달 */}
            <Comment author={data} text={'카즈하 이미지 사용'} date={new Date()}/>

            <br/>

            <Comment2 author={data} text={'컴포넌트 추출 해보기'} date={new Date()}/>

            <br/><hr/><br/>

            <ReplyList/>

            <hr/>

            <BootstrapCDN/>
            <br/>
            <BootstrapReact/>
        </div>
    )
}

export default App2;