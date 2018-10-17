import React from 'react';

const AnswerSelect = (props) => {
    return (
        <select onChange={props.onTextValueChange(props.data.id)}>
            {
                props.data.options.map((item, index) => (
                    <option key={index} >{item}</option>
                ))
            }
        </select>
    );
};

export default AnswerSelect;