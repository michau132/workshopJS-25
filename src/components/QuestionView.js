import React from 'react';
import Answer from './Answer/';



const List = ({questions, onTextValueChange, onStarClick, onMultiClick}) => {
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
                                    onStarClick={onStarClick}
                                    onMultiClick={onMultiClick}
                                />
                            </li>
                   )) 
                }
            </ul>
        );
}


export default List;
