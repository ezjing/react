import logo from './logo.svg';
import './App.css';


// 리액트 파일에서 CSS를 사용 시 html 태그 속성인 class를 className 으로 표기
// ES6에서 class가 추가되어 class를 사용 시 클래스를 뜻하는 키워드로 사용 인식될 수 있기 때문에 className으로 변경됨
// JSX 문법에서 {} 사용 시 자바스크립트 코드를 사용할 수 있음(JSX 문법에서 {} 들어가면 무조건 js 코드)
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
