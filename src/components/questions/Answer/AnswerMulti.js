import React from 'react';

const AnswerMulti = (props) => {
   return (
       <React.Fragment>
            {
                props.data.options.map((item, i) => (
                    <label key={i} style={{'display': "block"}}>
                        {item}
                        <input type="checkbox" name={item}/>
                    </label>
                ))
            }
       </React.Fragment>
   )
    
};

export default AnswerMulti;