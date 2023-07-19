import React from 'react';
import List from "./day05/List";
import AttendanceBook from "./day05/AttendanceBook";
import NameForm from "./day05/NameForm";
import RequestForm from "./day05/RequestForm";
import FruitSelect from "./day05/FruitSelect";
import Reservation from "./day05/Reservation";
import Join from "./day05/Join";
import Parent from "./day05/Parent";
import Parent2 from "./day05/Parent2";
import Parent3 from "./day05/Parent3";
import Calculator from "./day05/Calculator";

function App6() {
    return (
        <div className={'container'}>
            <List/>
            <hr/>
            <AttendanceBook/>
            <hr/>
            <NameForm/>
            <hr/>
            <RequestForm/>
            <hr/>
            <FruitSelect/>
            <hr/>
            <Reservation/>
            <hr/>
            <Join/>
            <hr/>
            <Parent/>
            <hr/>
            <Parent2/>
            <hr/>
            <Parent3/>
                <hr/>
                <Calculator/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default App6;