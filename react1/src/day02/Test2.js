// JSX 문법으로 구성한 화면
function Button(props) {    // button 이렇게 b를 소문자로 쓰면 html 태그로 인식... Button 함수가 컴포넌트고
    return (    // return 안의 부분이 엘리먼트이다
        <button className={`bg-${props.color}`}>    /* color = green */
            <b>{props.children}</b> {/* children = 확인 */}
        </button>
    )
}

function ConfirmDialog(props) {
    return (
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 클릭하세요</p>
            <Button color={`green`}>확인</Button> {/* Button은 태그가 아니고 컴포넌트이다 */}
            <Button color={`red`}>취소</Button>
        </div>
    )
}

// 실제로 생성되는 js object
{
    type: 'div',
    props: {
        children: [ // 자식태그 요소가 2가지 이상이면 대괄호 사용
            {   // p태그
                type: 'p',
                porps: {
                    children: '내용을 확인하셨으면 확인 버튼을 클릭하세요'
                }
            },
            {   // Button 컴포넌트 부분
                type: 'Button',
                props: {
                    color: 'green',
                    children: '확인'
                }
            }
        ]
    }
}


{
    type: 'div',
    props: {
        children: [ // 자식태그 요소가 2가지 이상이면 대괄호 사용
            {   // p태그
                type: 'p',
                porps: {
                    children: '내용을 확인하셨으면 확인 버튼을 클릭하세요'
                }
            },
            {   // Button 컴포넌트 부분(컴포넌트를 html 태그로 해석한 부분)
                type: 'button',
                props: {
                    className: 'bg-green',
                    children: {
                        type: 'b',
                        props: {
                            children: '확인'
                        }
                    }
                }
            }
        ]
    }
}