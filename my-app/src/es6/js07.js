// 자바스크립트의 라이브러리 의존성 관리
// 기존 자바스크립트의 라이브러리 의존성 관리방법은 html에서 필요한 자바스크립트 방식을 사용함
// ES5까지는 require를 사용하여 필요한 모듈을 호출해서 사용하는 방식
// ES6에서는 import/export

// export : 현재 파일을 외부 라이브러리로 출력할 때 사용
// export는 Named export와 Default export 2가지 방식이 존재함
// export는 클래스, 함수, 변수 모두 가능
// named export : 하나의 자바스크립트 파일에서 외부로 출력할 요소가 여러개가 있을 경우 사용하는 방식
// 사용법 : 
// export const 변수명 = 데이터;    // 변수를 외부로 출력
// export function 함수명() { ... };    // 함수를 외부로 출력
// const arr1 = [10, 20, 30];
// const arr2 = [40, 50, 60];
// export {arr1, arr2}; // 2개의 변수를 묶어서 한번에 외부로 출력
// export class 클래스명 { ... }

// default export : 하나의 자바스크립트 파일에서 외부로 출력할 요소 중 단 하나만 설정이 가능하고 default export로 설정했을 경우 이름이 따로 필요없음, 여러개의 named export와 함께 사용할 수 있음
// 사용법 :
// export default function 함수명() { ... } // default는 단 하나만 사용 가능 기본값이기 때문

// as : export, import 모두 사용 가능하며, 가져오는 요소 혹은 출력하는 요소의 이름을 수정할 수 있음
// 사용법 :
// export {arr1 as NumberArray, arr2 as StringArray}    // 배열 arr1의 이름을 NumberArray로 지정
// import {NumberArray as arr1, StringArray as trarr}

// import : 현재 파이렝 외부 라이브러리를 로드하여 사용
// 특정 라이브러리의 export로 지정된 클래스, 함수, 변수 등을 가져올 수 있음

// 사용법 :
// import 모듈명 from '라이브러리파일명';   // 해당 라이브러리의 모든 내용을 가져옴
// import {모듈명} from '라이브러리파일명'; // 해당 라이브러리 중 export로 지정된 클래스, 함수, 변수를 지정한 것만 가져옴, * 을 사용 시 모두 가져옴
// import {모듈명 as 별명} from '라이브러리파일명'; // 해당 라이브러리에서 지정한 모듈을 가져올때 이름을 변경하여 가져옴