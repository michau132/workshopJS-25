import React from 'react';

const AnswerMulti = ({data, currentValue = [], onMultiClick}) => {
    return (
       <React.Fragment>
            {
                data.options.map((item, i) => { 
                    return(
                    <label key={i} style={{'display': "block"}} >
                        {item}
                        <input type="checkbox" name={item} onChange={onMultiClick(data)}/>
                    </label>
                )})
            }
       </React.Fragment>
   )
    
};

export default AnswerMulti;