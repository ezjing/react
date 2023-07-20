import React from 'react';
import Card from "./Card";

function ProfileCard(props) {

    return (
        // 부모 컴포넌트인 ProfileCard에서 자식 컴포넌트인 Card를 호출
        // 자식 컴포넌트에 title, backgroundColor 속성에 데이터를 전달
        // 컴포넌트 합성 기법 중 포함 방식을 통해서 자식 컴포넌트에 html 태그를 전달
        <div>
            <Card title={'이지징'} backgroundColor={'#1E90FF'}>
                <p>안녕하세요 이지징입니다.</p>
                <p>리액트 처음해봅니다.</p>
            </Card>

            <Card title={'갱갱아'} backgroundColor={'DeepPink'}>
                <p>안녕하세요 갱갱아입니다.</p>
                <p>리액트 처음해봅니다.</p>
            </Card>

            <Card title={'카리나'}>
                <p>안녕하세요 카리나입니다.</p>
                <p>리액트 처음해봅니다.</p>
            </Card>

            <Card backgroundColor={'DeepPink'}>
                <p>안녕하세요 갱갱아입니다.</p>
                <p>리액트 처음해봅니다.</p>
            </Card>
        </div>
    );
}

export default ProfileCard;