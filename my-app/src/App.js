import logo from './logo.svg';
import './App.css';
// import {getData1} from "./es6/Promise";
import {getData, getData2} from "./es6/Promise2";

function App() {
    // console.log("----- app.js 실행 -----")
    // getData1();
    // console.log("----- app.js 실행 완료 -----")

    getData();

    getData2()
        .then(data => {
            console.log(`ajax 통신 성공 : ${data}`);
        })
        .catch(err => {
            console.log(`통신 실패 : ${err}`);
        });
    return (
        <div className="App">
            <h3>눈누난나</h3>
        </div>
    );
}

export default App; // index.html에서 동작
