import React, {useState} from 'react';

function FruitSelect(props) {
    // select에 multiple 미사용 시 기본값 설정
    const [value, setValue] = useState('수박');
    // select 에 multiple 사용 시 기본값 설정
    // const [value, setValue] = useState(['수박', '사과']);

    const handleChange = e => setValue(e.target.value);

    const handleSubmit = e => {
        alert(`선택한 과일 : ${value}`);
        e.preventDefault();
    }
    
    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="sel1" className={'form-label'}>과일을 선택하세요 : </label>
            {/* html의 select 는 자식 태그인 option에 selected 속성을 추가하여 기본 값을 설정함 */}
            {/* 리액트의 제어컴포넌트 select는 option에 selected 속성을 사용하지 않고 select 태그에 value 속성을 추가하고 state로 설정된 변수를 입력하여 사용 */}
            {/* 여러개 선택 시 select 에 multiple 속성을 true로 설정(multiple={true}), 기본값(useState의 기본값 배열형태)을 여러개 설정 시 배열로 지정 */}
            <select name="" id="sel1" className={'form-control'} value={value} onChange={handleChange}>
                <option value={'사과'}>사과</option>
                <option value={'복숭아'}>복숭아</option>
                <option value={'수박'}>수박</option>
                <option value={'포도'}>포도</option>
                <option value={'참외'}>참외</option>
            </select>
            <button type={'submit'} className={'btn btn-primary mt-2'}>확인</button>
        </form>
    )
}

export default FruitSelect;