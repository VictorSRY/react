import React from 'react'

const authService = React.createContext({
    logInState: false,
    logIn: ()=>{}
})

export default authService