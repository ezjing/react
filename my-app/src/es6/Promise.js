// Promise.js

// 프로미스란? 자바스크립트에서는 비동기 함수의 동기 방식 처리를 위해서 제공하는 객체(동기란 하나의 태스크가 끝날 때 까지 기다렸다가 다음 태스크가 실행. 직렬적)
// 자바스크립트는 기본적으로 싱글 쓰레드 방식으로 프로그램을 처리하고 있음
// 자바스크립트는 비동기 방식으로 프로그램을 처리하고 있음(비동기란 특정 코드가 끝날때 까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행. 병렬적)(비동기처리 방식은 콜백함수 사용)
// 비동기 방식의 처리 중 반드시 동기 방식으로 프로그램 처리를 해야 할 경우 callback 함수를 사용하여 동기 방식으로 처리함
// callback을 여러번 사용하게 될 경우 프로그램의 복잡도가 급상승함
// 이러한 콜백지옥을 처리하기 위해서 ES6에서는 프로미스를 사용함

import React from 'react';
import $ from 'jquery';

console.log("글자 출력!!");

// 이벤트 루프로 실행을 위임 시킴
setTimeout(function () {    // function()이 콜백 함수
    console.log("5초 후 출력되는 문자");
}, 5000);

console.log("타이머 실행 후 출력되는 문자");

// 출력 순서 1. 글자출력, 2. 타이머, 3. 5초 후(쓰여진 순서는 두번째지만 5초동안 따로 작업이 걸림 걸려있는 동안 다른 로그부터 실행되기 때문에 가장 나중에 출력)

// 실행창 - Command Prompt 띄우고, npm 사이트 접속, jquery 검색 들어가기, 실행하는 내용 npm i jquery 프롬프트에 넣고실행, package.json에서 "jquery": "^3.7.0", 추가됐는지 확인, 리액트 재시작

function getData1() {
    // 이벤트 루프에 실행을 위임함
    $.ajax({
        url: "http://localhost:8080/async/data1",
        type: 'GET',
        success: function (data) {
            console.log(`통신성공 
        ${data}`);

            // $.ajax({
            //     url: "",
            //     type: "GET",
            //     success: function (data) {
            //         console.log();
            //     },
            //     error: function () {
            //         console.log()
            //     }
            // })
        },
        error: function () {
            console.log(`통신 중 오류가 발생했습니다.`);
        }
    });
}

export {getData1};

// 1. 서버통산(데이터 받고) 2. 받은 데이터로 다시 통신

