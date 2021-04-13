import React from 'react';
import { useState } from 'react';

const Counter =(props)=>{
    const [count,setCount]=useState(0);

    const incre=()=>{
        setCount(count+1);
    };

    const clickString = props.click || '클릭';
    return (
    <>
        <button onClick={incre}>{clickString}</button>
        {count}
    </>
    );
};
export default Counter;


