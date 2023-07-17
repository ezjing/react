import React from 'react';
import SetStateClass from "./day03/SetStateClass";
import SetStateFunction from "./day03/SetStateFunction";
import NotificationList from "./day03/NotificationList";
import Counter from "./day03/Counter";
import CounterUseState from "./day03/CounterUseState";
import CounterUseEffect from "./day03/CounterUseEffect";
import VolumeControl from "./day03/VolumeControl";
import TextInputWithFocusButton from "./day03/TextInputWithFocusButton";

function App4() {
    return (
        <div>
            <SetStateClass/>

            <hr/>

            <SetStateFunction/>

            <hr/>

            <NotificationList/>

            <hr/>

            <Counter/>

            <hr/>

            <CounterUseState/>

            <hr/>

            <CounterUseEffect/>

            <hr/>

            <VolumeControl/>

            <hr/>

            <TextInputWithFocusButton/>
        </div>
    )
}

export default App4;