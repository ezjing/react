import React from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

function Profile2(props) {
    // 주소 뒤에 있는 파라미터를 ? 기호를 포함하여 모두 문자열로 그대로 가져옴
    // 사용자가 직접 파싱 작업을 진행해야함
    const profile = useLocation();
    console.log(`useLocation()으로 가져온 데이터`);
    console.log(profile);
    const {pathname, search} = profile;
    console.log(pathname);
    console.log(search);

    // 파라미터 값을 자동으로 파싱하여 데이터를 가져옴
    const [params, setParams] = useSearchParams();  // 주소 : http://localhost:3000/profile2?userName=아이유&age=30
    console.log(`useSearchParams()로 가져온 데이터`);
    console.log(params);
    // 실제 데이터를 출력 시 get() 함수를 사용해야 함
    console.log(params.get('userName'));
    console.log(params.get('age'));

    return (
        <div>
            <h1>Profile2 페이지</h1>
            <h3>파라미터1 : {params.get('userName')}</h3>
            <h3>파라미터2 : {params.get('age')}</h3>
        </div>
    )
}

export default Profile2;