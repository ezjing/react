import React, {useState} from "react";

function Children32(props) {
    const [inputValue, setInputValue] = useState('');
    const recData = props.data;
    const recFunc = props.func;

    const changeInput = e => setInputValue(e.target.value);
    const sendData = e => {
        // props.func(inputValue);
        recFunc(inputValue);
    }
    
    return (
        <div className={'my-3 border border-2 rounded rounded-2 p-2'}>
            <input type="text" className={'form-control mb-2'} value={inputValue} onChange={changeInput}/>
            <button type={'button'} className={'btn btn-primary'} onClick={sendData}>데이터 전달</button>
        </div>
    )
}

export default Children32;