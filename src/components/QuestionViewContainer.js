import React from 'react';
import {connect} from 'react-redux';
import List from './QuestionView';
import { updateQuestionValue } from '../actions/actionCreators';


const QuestionViewContainer = ({questions, onTextValueChange}) => {
    return (
        <List questions={questions} onTextValueChange={onTextValueChange}/>
    );
};

const selectQuestions = (state) => state.questions;
const mapStateToProps = state => {
    return {
        questions: selectQuestions(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTextValueChange: (id) => (e) => {
            dispatch(updateQuestionValue(id, e.target.value))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionViewContainer)