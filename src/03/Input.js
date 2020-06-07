import React from 'react';

const Input = ({name,label,onChange}) => {
   return (
      <div>
         <h1>인풋입니다.</h1>
         {label}<input name={name} onChange={()=>{onChange()}}></input>
      </div>
   );
};

export default Input;