// JSX 문법을 사용하여 작성한 코드
const element = <h1>hello world!!</h1>;

// 실제로 생성된 JS Object 타입
{
    type: 'button',
    props: {    // props : 매개변수
        className: 'bg-green',  // class 속성
        children: {
            type: 'b',
            props: {
                children: 'hello world'
            }
        }
    }
}

// 위의 object 타입이 구현된 모습
<button class="bg-green">
    <b>hello, world</b>
</button>

React.createElement(
    type,   // html 태그 종류 쓰는 곳
    [props],    // props html 태그 속성
    [...children]   // 하위 태그
)