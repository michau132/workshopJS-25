import React from 'react';

const AnswerText = (props) => {
        return (
            <input onChange={props.onValueChange(props.data.id)} type={props.data.type} />
        );
    }

export default AnswerText;