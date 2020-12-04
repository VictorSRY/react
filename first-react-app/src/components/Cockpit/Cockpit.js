import React, { useContext } from 'react'
import authService from '../../context/auth'

const Cockpit = (props) => {

    let buttonStyle = {
        border: '2px solid white',
        ':hover': {
            border: '2px solid black'
        }
    }

    const authS = useContext(authService)
    return (
        <div>
            <h1>hi the is first react app</h1>
            <button className="btn btn-success" style={buttonStyle} onClick={props.toggleShow}>Switch Name</button>
            <button onClick={authS.logIn} >logIn</button>
        </div>
    )
}
export default Cockpit