import React, { useState, useEffect } from 'react';

function CounterUseEffect() {
    const [count,setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // useEffect hooks를 사용하여 리액트 생명주기 함수의 기능을 사용함(리액트는 개발용, 배포용 있는데 개발용일때 unmount 빼고 두번씩 실행함)
    // 의존성 배열을 빈 배열로 지정하면 componentDidMount() 함수로 동작
    useEffect(() => {
        setCount2(100);
        console.log("컴포넌트 mount 시 동작함");
    }, []); // 의존성 배열에 아무런 값이 없기 때문에 처음에만 한번 실행되고 더이상 실행되지 않음. componentDidMount() 기능

    // useEffect 사용 시 componentDidUpdate() 함수의 기능을 사용하고자 하면 의존성 배열 부분에 변수를 지정
    useEffect(() => {
        document.title = `총 ${count} 번 클릭했습니다.`;
        console.log('컴포넌트 update 시 동작');
    }, [count]);    // 배열 안에 count가 없으면 html 페이지 제목이 바뀌지 않음. componentDidUpdate() 기능, 의존성 배열에 count가 있기 때문에 계속 텍스트 출력(의존성 배열에 있는 변수중 하나라도 변경되면 화면 업데이트)

    // useEffect 사용 시 componentWillUnmount() 함수의 기능을 사용하고자 하면 콜백 함수에 return 부분에 콜백 함수를 추가하여 사용함
    useEffect(() => {
        return () => {
            console.log("컴포넌트 unmount 시 동작함");
        }
    }, []);

    return (
        <div className={'container'}>
            <p>총 {count} 번 클릭했습니다.</p>
            <button type={'button'} className={'btn btn-primary'} onClick={() => setCount(count + 1)}>클릭</button>

            <div className={'mt-3'}>
                <p>두 번째 count의 값 : {count2}</p>
                <button type={'button'} className={'btn btn-success'} onClick={() => setCount2(count2 + 10)}>클릭</button>
            </div>
        </div>
    );
}

export default CounterUseEffect;

// 문제 1) 버튼 2개를 생성하여 (+, -)하여 useState와 useEffect를 사용하여 볼륨값을 조절하는 프로그램을 UI와 이벤트가 동작하도록 작성하세요
// state 변수명 volume
// volume 초기값 = 0, 기본 설정값 5, 최대값은 10으로 설정
// 파일명 : VolumeControl