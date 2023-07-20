import React from 'react';

// 컨텍스트는 파일로 분리(DOM에 임포트 하고 DOM은 컨텍스트로 전달)
// 여러개의 데이터를 전달할 경우 object, 배열에 데이터를 넣어서 전달
// 컨텍스트만 사용하여 여러개의 데이터를 전달할 경우에는 컨텍스트를 중복해서 사용하면 됨
// Provider 및 Consumer를 중첩하여 사용
const ThemeContext = React.createContext('info');   // creatContext : 컨텍스트 객체를 생성, 'info'에 배열[' ' , ' ']을 넣거나 오브젝트 타입 {a: ' ', b: '', C :...}를 넣으면 한번에 여러 데이터 전달 가능

ThemeContext.displayName = 'ThemeContext';  // displayName : 이름 설정

export default ThemeContext;