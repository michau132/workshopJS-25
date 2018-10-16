import React from 'react';
import { connect } from 'react-redux';
import {updateQuestionValue } from '../../../actions/actionCreators'

const AnswerText = ({data, onValueChange}) => {
    return (
        <input type={data.type} onChange={onValueChange(data.id)} />
    );
}



const mapDispatchToProps = dispatch => {
    return {
        onValueChange: (id) => e =>  {
            dispatch(updateQuestionValue(id, e.target.value))
        }
    }
}
export default connect(null, mapDispatchToProps)(AnswerText);