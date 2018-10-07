import React, { Component } from 'react';

class AnswerNumber extends Component {
    state = {
        currentValue: ''
    }
    getValueFromInput = (e) => {
        console.log(e.target.value)
        this.setState({currentValue: e.target.value})
    }
    render() {
        return (
            <input onChange={this.getValueFromInput} type={this.props.data.type} value={this.state.currentValue} />
        );
    }
}

export default AnswerNumber;