import React from 'react';
import Stars from 'react-star-rating-component';

const AnswerNumber = (props) => {
    const {data} = props;
    return (
        <Stars
            name={data.question}
            starCount={data.max}
            value={data.currentValue}
            onStarClick={evt => props.onStarClick(data.id, evt)}
        />
    );
};

export default AnswerNumber;