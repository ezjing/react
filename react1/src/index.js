import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from "./App2";
import Clock from "./day02/Clock";
import Car from"./day02/Car";

// index.html 파일에서 id값이 'root' 태그를 찾아서 리액트 방식으로 태그를 생성
const root = ReactDOM.createRoot(document.getElementById('root'));  // DOM(document object model) 은 html 문서, web 문서.. !리액트 웹 문서!, getElementById : 특정 id 가지고 있는 html 태그(element와 동의어) 가져오는 순수 js 함수
// render() : 화면을 생성하는 리액트 메소드
// root.render(    // render : 화면을 그려주겠다
//     // JSX 문법을 사용하여 화면을 생성, StrictMode : 문법 엄격하게 체크하겠다
//     <React.StrictMode>
//         <App/>
//         <App2/>
//     </React.StrictMode>
// );

// root.render(
//     <React.StrictMode>
//         <Clock />
//     </React.StrictMode>
// )

// setInterval : 자바스크립트의 타이머 함수, 지정된 시간마다 콜백함수를 실행
setInterval(() => {
    root.render(
        <React.StrictMode>
            <Clock />
            {/* 부모 컴포넌트 */}
            <Car />
        </React.StrictMode>
    )
}, 1000);   // Clock이란 컴포넌트를 1초에 한번씩 계속 로딩함

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
