import React, {useEffect} from 'react';
import axios from "axios";

function AxiosTest(props) {

    useEffect(() => {
        axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230719')
            .then(req => {
                alert('통신 성공');
                console.log(req);

                const list = req.data.boxOfficeResult.dailyBoxOfficeList;

                for (let i = 0; i < list.length; i++) {
                    let str = `순번 : ${list[i].rnum}\n`;
                    str += `순위 : ${list[i].rnum}\n`;
                    str += `제목 : ${list[i].movieNm}\n`;
                    str += `개봉일 : ${list[i].openDt}\n`;
                    str += `관람객 : ${list[i].audioCnt}\n`;
                    console.log(`${str}\n`)
                }
            })
            .catch(err => {
                alert('통신 실패');
                console.log(err);
            })
    }, []);

    return (    // 리턴 안에서는 map, foreach 사용해야함
        <div></div>
    )
}

export default AxiosTest;