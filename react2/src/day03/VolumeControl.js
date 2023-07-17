import React, {useEffect, useState} from 'react';

function VolumeControl() {
    // useState를 사용하여 지정된 state 변수의 값을 변경할 수 있도록 지정
    const [volume,setVolume] = useState(0);

    // useEffect를 사용하여 의존성 배열에 지정된 변수의 값이 변경되면 콜백함수를 실행
    // 내 풀이
    useEffect(() => {
        setVolume(5);
    }, [])

    useEffect(() => {
        document.title = `현재 볼륨은 ${volume} 입니다.`;
    }, [volume])

    return (
        <div>
            <h4>volume 조절기</h4>
            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                if (volume < 10 && volume > -1) {   // 비동기 특성 때문에 숫자를 하나씩 더 크거나 작게 만듦 1씩 더 크거나 작게하기 싫으면 volume + 1 < 10, volume + 1 > 0 이렇게 1 을 미리 더해주면 됨
                    setVolume(volume + 1)
                }
                console.log(volume);
            }}>+</button>
            <p>{volume}</p>
            <button type={'button'} className={'btn btn-danger'} onClick={() => {
                volume - 1 >= 0 ? setVolume(volume - 1) : setVolume(0); // 삼항연산자 사용
                // if (volume < 11 && volume > 0) {
                //     setVolume(volume - 1)
                // }
                console.log(volume);
            }}>-</button>
        </div>
    )
}

export default VolumeControl;