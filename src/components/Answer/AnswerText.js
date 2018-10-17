import React from 'react';


const AnswerText = ({data, onTextValueChange}) => {
    return (
        <input type={data.type} onChange={onTextValueChange(data.id)} />
    );
}


export default AnswerText;