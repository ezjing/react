import React, {useContext} from 'react';

// 컨텍스트 생성
const ThemeContext = React.createContext('light');
const UserContext = React.createContext('Guest');

// 개발자 도구에 표시하기 위한 이름 설정
UserContext.displayname = '유저컨텍스트';

function App10(props) {
    const {theme, signedInUser} = props;

    return (
        // 컨텍스트에 데이터 저장 시 Provider는 사용해야 함
        <ThemeContext.Provider value={theme}>
            <UserContext.Provider value={signedInUser}>
                {/* 컨텍스트를 사용할 자손 컴포넌트 지정 */}
                <Layout/>
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

// 부모 컴포넌트가 직접 전달한 데이터가 없으므로 props가 비었음
function Layout(props) {
    return (
        // 자식 컴포넌트 호출, 전달할 데이터 없음
        <Content/>
    )
}

// 부모 컴포넌트가 전달한 데이터가 없음, props가 비었음
function Content(props) {
    // useContext 훅을 사용하여 데이터 가져오기
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);
    return (
        // 컨텍스트에 저장된 데이터를 자식 컴포넌트 호출 시 함께 전달
        <ProfilePage theme={theme} user={user}/>
    )
}

function ProfilePage(props) {
    return (
        <div>
            <p>{props.user}</p>
            <p>{props.theme}</p>
        </div>
    )
}

export default App10;