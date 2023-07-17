import React from 'react';

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid gray',
        borderRadius: 16,
    },
    messageText: {
        color: 'black',
        fontSize: 16,
    }
}

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        console.log('componentDidMount() called');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate() called');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount() called');
    }

    render() {
        return (
            <div style={styles.wrapper}>
                {/* 부모 컴포넌트에서 전달된 데이터인 message를 출력 */}
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;