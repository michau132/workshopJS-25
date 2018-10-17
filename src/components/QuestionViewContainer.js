import React from 'react';
import {connect} from 'react-redux';
import List from './QuestionView';
import { updateQuestionValue } from '../actions/actionCreators';


const QuestionViewContainer = ({questions, onTextValueChange, onStarClick, onMultiClick}) => {
    return (
        <List questions={questions} onTextValueChange={onTextValueChange} onStarClick={onStarClick} onMultiClick={onMultiClick}/>
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
        },
        onStarClick: (id, val) => {
            dispatch(updateQuestionValue(id, val))
        },
        onMultiClick: data => (e) => {
            
            //biore currentValue przpisany do pytania i tworze z tego tablice
            const {currentValue = []} = data
            let currentCheckboxes = [];
            const checkboxValue = e.target.name;
            
            if (currentValue.includes(checkboxValue)) {
                currentCheckboxes = currentValue.filter(item => item !== checkboxValue)
            } else {
                currentCheckboxes = [...currentValue, checkboxValue ]
            }
            
            return dispatch(updateQuestionValue(data.id, currentCheckboxes))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionViewContainer)