import React from 'react';

// 컨텍스트 사용을 위해서 React.createContext() 실행하고 변수에 저장
// 컨텍스트 2개 생성
const ThemeContext = React.createContext('light');
const UserContext = React.createContext('Guest');

function App9(props) {
    // 전개 연산법으로 object 타입인 props의 key와 동일한 이름의 변수에 데이터 저장
    const {theme, signedInUser} = props;

    return (
        // 컨텍스트 2개를 겹쳐서 사용 시 지정한 컴포넌트의 자손 컴포넌트에서 2개의 데이터를 모두 사용할 수 있음
        <ThemeContext.Provider value={theme}>
            <UserContext.Provider value={signedInUser}>
                {/* 자식 컴포넌트인 Layout 을 호출, 전달 데이터 없음 */}
                <Layout/>
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

// 전달받은 데이터가 없어서 props가 비어있음
function Layout(props) {
    return (
        <div>
            {/* 자식 컴포넌트인 Content 를 호출, 전달 데이터 없음 */}
            <Content/>
        </div>
    );
}

// 전달받은 데이터가 없어서 props가 비어있음
function Content(props) {
    return (
        // Provider를 겹쳐서 사용했기 때문에 Consumer도 겹쳐서 사용함
        <ThemeContext.Consumer>
            {/* 컨텍스트에 저장된 속성명(key)은 value로 고정되어 있으므로 Consumer에서 가져온 데이터의 이름을 원하는 이름으로 설정할 수 있음 */}
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <ProfilePage user={user} theme={theme}/>    /* 한번에 여러개의 데이터를 전달하는게 가능 */
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

function ProfilePage(props) {
    return (
        <div>
            <p>{props.user}</p>
            <p>{props.theme}</p>
        </div>
    );
}

export default App9;