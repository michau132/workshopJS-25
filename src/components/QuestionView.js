import React from 'react';
import Answer from './questions/Answer';



const List = ({questions, onTextValueChange}) => {
        return (
            <ul>
                {
                   questions.map(listItem => (
                            <li key={listItem.id}>
                                <h4>{listItem.question}</h4>
                                <Answer
                                    type={listItem.type} 
                                    dataFromItem={listItem} 
                                    onTextValueChange={onTextValueChange}
                                />
                            </li>
                   )) 
                }
            </ul>
        );
}


export default List;
