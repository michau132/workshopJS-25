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

const Answer = ({type, dataFromItem}) => {
    if (type === 'text') {
        return (
            <AnswerText data={dataFromItem}/>
        )
    } else if (type === 'multi') {
        return (
            <AnswerMulti data={dataFromItem}/>
        )
    } else if (type === 'select') {
        return (
             <AnswerSelect data={dataFromItem}/>
        )
    } else if (type === 'number') {
        return (
            <AnswerNumber data={dataFromItem}/>
        )
    }
     else {
        return (
        <div>nic</div>
        )
    }
};

export default Answer;