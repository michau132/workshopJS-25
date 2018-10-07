import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer/index';
import Question from './question';

const QuestionElement = ({item, onValueChange}) => {
    return (
        <li>
            <Question question={item.question} />
            <Answer type={item.type} dataFromItem={item} onValueChange={onValueChange}  />
        </li>
    );
};

QuestionElement.propTypes = {
    
};

export default QuestionElement;