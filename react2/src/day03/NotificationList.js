import React from 'react';
import Notification from "./Notification";

// 화면에 출력할 메시지 리스트
const reservedNotifications = [
    { message: '안녕하세요. 메시지 테스트입니다.', key: 1 },
    { message: '두번째 메시지 입니다.', key: 2},
    { message: '세번째 메시지 입니다.', key: 3},
    { message: '네번째 메시지 입니다.', key: 4},
];

// 자바스크립트의 타이머 값을 저장하기 위한 변수
// 전역 변수
let timer;

// 클래스 컴포넌트로 생성
class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        // 리액트 컴포넌트 상태 객체인 state 선언
        this.state = {
            // state로 사용할 배열 변수(배열) 선언
            notifications: [],
        }
    }

    // 자식 컴포넌트가 mount(생성)된 후 자동 실행되는 메소드
    componentDidMount() {
        // state 객체가 가지고 있는 데이터를 = 기호 왼쪽에 있는 변수에 대입
        // [변수 1, 2, 3] = 배열, {key 이름 1, 2, 3} = object
        // object 타입의 key(notifications: [])와 동일한 이름의 변수(notifications)에 값 대입
        // 지역 변수 notifications 생성
        const { notifications } = this.state;

        // 타이머 생성 후 타이머를 삭제하기 위한 주소를 변수 timer에 저장
        timer = setInterval(() => {
            // 지역변수 notifications의 크기와 전송할 메시지 리스트의 크기를 비교
            if (notifications.length < reservedNotifications.length) {
                // 출력하고자 하는 index 번호 생성
                const index = notifications.length;
                // 지역변수 notifications에 전송할 메시지 리스트의 데이터 추가
                notifications.push(reservedNotifications[index]);   // push : 배열 제일 뒤 데이터(메시지 내용 인덱스 순서대로) 추가
                // setState() 함수를 사용하여 실제 데이터 업데이트
                this.setState({notifications: notifications});  // 왼쪽 : state의 notifications, 오른쪽 : 지역변수 notifications
            }
            else {
                // 생성된 타이머 삭제(반복 실행 방지)
                clearInterval(timer);
            }
        }, 2000);
    }

    render() {
        return (
            <div>
                {/* state객체에 저장된 배열의 크기만큼 반복 실행 후 출력(리액트 map의 기능) */}
                {/* 처음 컴포넌트 생성 시에는 state에 있는 notifications의 값이 없기 때문에 map() 함수가 동작하지 않음 */}
                {/* setState() 함수 실행 후 state에 있는 notifications에 값이 존재하기 때문에 map() 함수가 동작되어 자식 컴포넌트인 Notification 이 호출됨 */}
                {/* 방법 1 */}
                {this.state.notifications.map((item) => {
                    // 자식 컴포넌트 호출 시 key 에 관련된 오류가 발생할 수 있음
                    // 자식 컴포넌트에 데이터를 전달할 때 유일한 값으로 제공되는 key 속성이 없으면 컴포넌트의 구분이 힘들기 때문에 오류가 발생함
                    return <Notification message={item.message} key={item.key}/>; /* reservedNotifications의 메시지 내용을 전달 */
                })}

                {/* 방법 2 */}
                {/*{this.state.notifications.map((item, index) => {*/}
                {/*    // 배열의 index를 key로 전달하는 방법이 있지만 좋은 방법이 아니므로 사용하지 않는 것이 좋음(페이징 기능 사용 시 1번 페이지 0~9번 2번 페이지 0~9 이런식으로 동일한 키 값이 쓰여지므로 권장X)*/}
                {/*    return <Notification message={item.message} key={index}/>;*/}
                {/*})}*/}
            </div>
        );
    }
}

export default NotificationList;