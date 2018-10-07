import React from 'react';
import PropTypes from 'prop-types';

const Question = ({question = ''}) => {
    return (
        <h4>
            {question}
        </h4>
    );
};

Question.propTypes = {
    
};

export default Question;