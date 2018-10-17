import React from 'react';
import AnswerText from './AnswerText'
import AnswerMulti from './AnswerMulti';
import AnswerSelect from './AnswerSelect';
import AnswerNumber from './AnswerNumber';

// const components = {
//     text: AnswerText,
//     multi: 
// const Question = components[type]
// }

const Answer = ({type, dataFromItem, onTextValueChange, onStarClick, onMultiClick}) => {
    if (type === 'text') {
        return (
            <AnswerText data={dataFromItem} onTextValueChange={onTextValueChange}/>
        )
    } else if (type === 'multi') {
        return (
            <AnswerMulti data={dataFromItem} onMultiClick={onMultiClick}/>
        )
    } else if (type === 'select') {
        return (
             <AnswerSelect data={dataFromItem} onTextValueChange={onTextValueChange}/>
        )
    } else if (type === 'number') {
        return (
            <AnswerNumber onStarClick={onStarClick} data={dataFromItem}/>
        )
    }
     else {
        return (
        <div>nic</div>
        )
    }
};

export default Answer;