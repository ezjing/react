// 원래 jsx가 맞음 js도 인식하기는 함

import React from "react";
import ReactDOM from "react-dom";

// 순수 자바스크립트로 화면 구성
class Hello extends React.Component {
    render() {
        return React.createElement("div", null, `Hello ${this.props.toWhat}`);  // crateElement : 태그 생성, div = 태그 타입, null = 매개변수, `Hello ~` = 하위태그(글자 출력)
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    React.createElement(Hello, {toWhat: "World"}, null),
    document.getElementById("root")
);