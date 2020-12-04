import React, { useContext } from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import AuthS from '../../../context/auth';

const WidthStyle = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid black;
        padding: 16px;
        '@media (min-width: 500px)':{
            width: '450px',
        }`
const Pirson = (props) => { 
    
    const authS = useContext(AuthS)

    return (
        <WidthStyle>
            { authS.logInState? <p>login</p> : <p>not login</p> }
            <p onClick={props.call}> this is from pirson Component and Pirson is: { props.name }, { props.age } years old! {props.children}</p>
        </WidthStyle>
    ) 
};

Pirson.PropType = {
    call: PropType.func,
    name: PropType.string,
    Age: PropType.number,

}
export default Pirson;  