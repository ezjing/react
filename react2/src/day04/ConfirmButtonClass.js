import React from "react";

class ConfirmButtonClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isConfirmed: false };

        // this.handleConfirm = this.handleConfirm.bind(this);
    }

    // 첫번째 방식, bind()를 사용한 방식
    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed
    //     }));
    // }


    // 두번째 방식, 화살표 함수를 사용한 방식
    handleConfirm = () => { // 화살표 함수를 쓰면 자동으로 bind 가 된다
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed
        }))
    }

    render() {
        return (
            <button type={'button'} className={'btn btn-primary'} onClick={this.handleConfirm} disabled={this.state.isConfirmed}>{this.state.isConfirmed ? '확인됨' : '확인하기'}</button>
        );
    }
}

export default ConfirmButtonClass;