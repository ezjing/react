import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./day07/Home";
import About from "./day07/About";
import ErrorPage from "./day07/ErrorPage";
import Profile1 from "./day07/Profile1";
import Profile2 from "./day07/Profile2";

// react router : 리액트 프로젝트를 MPA 방식으로 사용할 수 있도록 해주는 라이브러리

// <BrowserRouter> : SAP 페이지를 MPA 페이지로 마들어 주는 객체, 가장 기본 라우터 객체
// <Routes> : 페이지 객체를 여러개 가질 수 있는 객체
// <Route> : 화면에 그려지는 페이지 객체, Route 컴포넌트에 자식 컴포넌트로 Route 컴포넌트를 사용 시 부모 Route 컴포넌트의 주소를 기본 주소로 사용함
// Path : 웹 브라우저에 표시되는 url 주소를 설저아 절대 경로/상대 경로 다 사용가능, *을 사용 시 모든 페이지를 뜻함(path url을 정확하기 입력해야 접속이 가능, 주로 error 페이지 설정 시 사용함)
// element: path로 지정된 url 주소와 매칭되는 컴포넌트를 설정
// <Link> : 리액트 라우터에서 사용되는 링크 전용 컴폰너트 html의 <a/>태그와 같은 역할
// to : 이동할 url 주소를 입력, Route 컴포넌의 path 속성에 설정한 값을 사용함
// <Outlet> : 현재 선택된 경로의 컴포넌트를 화면에 표시

// URL 파라미터 : RestAPI 방식의 주소형태로 구성되는 파라미터 
// Route 컴포넌트의 path속성값 뒤에 / 와 : 파라미터명을 사용하여 데이터를 전달하는 방식
// rest 방식으로 구성되어 있을 경우 사용
// 연결된 컴포넌트에서 useParams 휵을 사용해야 함
// 사용법 :
// 기존 url/:파라미터1/:파라미터2
// <Route path {url/:test1/:test2} element={<Url/>}

// 쿼리스트링 : 기존의 get방식으로 웹 브라우저의 주소창에 파라미터를 함께 전달하는 방식
//<Route> 컴포넌트의 path에 변경이 없음
// 지정된 컴포넌트에서 몇가지 옵션 사항을 사용할 수 있음
// 옵션 :
//     pathname : 쿼리 스트링을 제외한 현재 주소의 경로 
//     search: 맨 앞의? 문자를 포함한 쿼리 스트링 값 전체
//      hash : 주소의 # 문자열 뒤의 값 (구형 브라우저에서만 사용
//      state : 페이지 이동 시 임의로 추가할 상태 값
//      key : location 객체의 고유한 값
//      useLocation(), userSearchParams() 훅을 사용하여 데이터를 가져올 수 있음
//      userLocation(() 훅을 사용하여 데이터를 가져오면 원하는 파라미터값을 가져오기 위해 직접 파싱을 해야함) 
//      useSearchParams() 훅을 사용하여 데이터를 가져오면 파라미터 데이터만 따로 가져올 수 있음
// 사용법 :
//      기존url?파라미너1=값1&파라미터2=값2

// useNavigate() : Link 컴포넌트를 사용하지 않고 다른 페이지로 이동하는 훅
// 사용법 : 
//     const navigate = useNavigate();
//     navigate(-1); // History를 이용하여 이전 페이지로 이동, 숫자를 음수로 입력 시 이전 페이지로, 양수로 입력시 다음 페이지로 이동
//     navigate('url/'); // 지정한 url로 이동


function App13(props) {

    return (
        <BrowserRouter>
            <Routes>
                {/* Route를 중첩되도록 입력 시 부모 Route 컴포넌트를 기본 주소로 설정할 수 있음 */}
                {/* Route를 중첩했을 경우 자식 Route의 path 값의 시작 글자에 '/'가 있으면 안됨 */}
                <Route path={'/pages'}>
                    {/* 자식 Route 컴포넌트는 부모 url + 자신 url 형태로 주소를 사용함 */}
                    {/* index 속성은 부모 주소를 자신의 주소로 사용한다는 의미 */}
                    <Route index element={<Home/>}></Route>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'*'} element={<ErrorPage/>}/>  {/* 지정한 상단 2개 주소 외 주소로 들어가면 출력 */}
                    {/* URL 파라미터 방식으로 데이터 전달 */}
                    <Route path={'profile1/:username/:age'} element={<Profile1/>}/>
                    {/* 쿼리스트링 방식으로 데이터 전달, 전통적인 get 방식으로 전달, url에 속성명=값 형태로 전달 */}
                    {/*<Route path={'/profile2'} element={<Profile2/>}/>*/} {/* 부모 주소가 없을 때 */}
                    <Route path={'profile2'} element={<Profile2/>}/>    {/* 부모 주소가 있을 때 '/' 생략 */}
                </Route>
                
            </Routes>
        </BrowserRouter>
    );
}

export default App13;