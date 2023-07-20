import React from 'react';
import AxiosTest from "./day06/AxiosTest";
import AxiosDailyBoxOffice from "./day06/AxiosDailyBoxOffice";

function App11(props) {

    return (
        <div className={'container'}>
            <AxiosTest/>
            <hr/>
            <AxiosDailyBoxOffice/>
        </div>
    )
}

export default App11;