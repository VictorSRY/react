import React from 'react';

const pirson = (props) => { 
    return (
        <div>
            <p onClick={props.call} > this is from pirson Component and Pirson is: { props.name }, { props.age } years old! {props.children}</p>
        </div>
    ) };

export default pirson;  