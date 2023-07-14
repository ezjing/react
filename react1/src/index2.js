import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX 문법으로 화면 구성(html 태그처럼 구성되는 부분이 있어 보기 편하다)
// index.html 파일에서 id 값이 'root'인 태그를 선택
const root = ReactDOM.createRoot(document.getElementById('root'));

// 리액트를 사용하여 화면을 그려줌(toWhat은 매개변수임)
class Hello extends React.Component {
    render() {
        return (    // 하나의 부모태그가 두 자식 태그 감싸는거 오류X 부모태그는 반드시 한개만 사용 가능, 태그가 2개 이상인 경우 return 뒤 () 안에 태그 사용(return 할때 평소때 ()쓰도록 하자)
            <div>
                <div>Hello {this.props.toWhat}</div>
                <br></br>
                <h1>두줄쓰기</h1>
                <hr/>
                <h2>세번째 줄</h2>
            </div>
        )
    }
}

// id 값이 root 인 태그에 아래의 내용을 그려줌(매개변수 toWhat은 World 문자열임)
root.render(
    <Hello toWhat = {"World"} />    // 컴포넌트 호출
);

