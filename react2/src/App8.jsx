import React from 'react';
import ThemeContext from "./day06/ThemeContext";
import Toolbar3 from "./day06/Toolbar3";

function App8(props) {

    return (
        // Context의 Provider에 데이터를 전달함
        // 실제로 직계 자손 컴포넌트는 해당 데이터를 사용하지 않음
        // 여러 단계 아래의 자손 컴포넌트에서 해당 데이터를 사용
        <ThemeContext.Provider value={'dark'}>
            {/* 자식 컴포넌트인 Toolbar3에는 전달한 데이터가 값음 */}
            <Toolbar3/>
        </ThemeContext.Provider>
    );
}

export default App8;