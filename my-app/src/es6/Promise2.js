// Promise2.js

// Promise에노는 pending, fulfilled, rejected 3가지 상태가 존재함
// pending : 대기 상태, 비동기 함수가 실행되고, 아직 처리가 완료되지 않은 생태
// fullfilled : 완료 상태, 비동기 함수가 실행된 후 정상적으로 처리가 완료된 상태
// rejected : 거부 상태, 비동기 함수가 실행된 후 오류가 발생한 상태

// 프로미스 실행 시 콜백함수가 실행되고, 해당 콜백함수의 매개변수로 resolve(), reject() 함수를 제공함
// resolve(매개변수) : 프로미스 실행 후 fulfilled 상태일 경우 실행하는 함수, 나중에 then()함수를 제공함
// reject(매개변수) : 프로미스 실행 후 rejected 상태일 경우 실행하는 하무, 나중에 catch() 함수를 제공함

// 프로미스에는 완료 및 오류처리를 위해서 then() , catch()함수를 제공함
// then(매개변수) : 비동기 함수 실행이 완료 된 후 실행되는 함수
// catch(매개변수) : 비동기 함수 실행이 거부된 하 실행되는 함수

// 사용법 :
// 선언 :
// function 프로미스를 사용할 함수명(매개변수) {
//     return new Promise(function,(resolve, reject) {
//         비동기 방식 실행 소스
//         비동기 방식 실행 결과에 따라 resolve(), rejact()
//     })
// };

// 실행 :
// 프로미스를 사용한 함수명() {
// .then(function(매개변수) {
//     성공 시 실행할 내용;
// });
// .catch(function(매개변수) {
//     실패 시 실행할 내용;
// });

import React from 'react';
import $ from 'jquery';


// 프로미스를 사용할 함수, 동기 방식으로 동작을 해야하는 내용을 실행할 경우
function getData() {
    return new Promise(function (resolve, reject) {
        const data = 100;

        // 비동기 실행이 정상 실행 시
        resolve(data);
        // 비동기 실행에 오류가 있을 경우 실행
        // reject("에러 발생");
    })
}

getData()
    .then(function (data) {
        console.log(`프로미스 사용 반환값 : ${data}`)
    })
    .catch(function (err) {
    console.log(`프로미스 사용 오류 시 출력 메시지 : ${err}`)
    });

const getData2 = () => {
    return new Promise((resolve, reject) => {

        // 비동기 방식 통식
        $.ajax({
            url: "http://localhost:8080/async/data1",
            type: "GET",
            success: function (data) {
                resolve(data);
            },
            error: () => {
                reject('서버 접속 오류');
            }
        });
    });
}

// 참고 블로그


export { getData, getData2 };