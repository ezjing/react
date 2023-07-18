import React from 'react';
import button from "bootstrap/js/src/button";

// 클래스 컴포넌트로 생성
class ToggleClass extends React.Component {
    // 자바스크립트 클래스의 생성자
    // 생성자 안에 this.변수명, this.메소드명 사용 시 클래스의 멤버 변수, 멤버 메소드가 됨
    constructor(props) {
        super(props);

        // state 설정, state로 isToggleOn을 설정, 기본값 true(this.state는 ToggleClass클래스의 멤버 변수로 선엄)
        this.state = { isToggleOn: true};

        // 클릭이벤트 설정(this.handleClick는 ToggleClass클래스의 멤버 메소드로 선언)
        this.handleClick = this.handleClick.bind(this); // this 는 ToggleClass 를 뜻함
        // bind() : 자바스크립트의 클래스 함수가 기본적으로 클래스 내부에 등록되지 않음
        // bind()를 사용하지 않고 this.함수명을 사용 시 글로벌 스코프로 동작하여 웹 문서 전체에서 확인하게 됨
        // 해당 함수가 undefined로 출력됨
        // bind()를 사용하여 현재 클래스로 등록해야 함
    }

    // 버튼 클릭 이벤트 발생 시 실행될 메소드
    handleClick() {
        // state로 설정된 변수의 값 변경 시 실행
        // prevState : 이전 상태를 뜻함
        // 이전 state의 데이터를 가져와서 현재 state의 값으로 설정함
        this.setState(prevState => ({   // prevState는 이전 설정값을 뜻함
            isToggleOn: !prevState.isToggleOn   // 이전값과 다른값으로 변경 
        }));
    }

    // UI 생성
    render() {
        return (
            // onClick 속성을 사용하여 클릭 이벤트 발생 시 지정한 함수 실행 
            <button type={'button'} className={'btn btn-primary'} onClick={this.handleClick}>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        );
    }
}

export default ToggleClass;