import React from "react"
import Header from "../Header/Header"
import css from "./SignIn.module.css"
const SignIn = () => {
    return (
        <React.Fragment>
            <div style={{position:"absolute",width:"100%",zIndex:"11"}}><Header></Header></div>
            <div className={css.container} onClick="onclick">
            <div className={css.top}></div>
            <div className={css.bottom}></div>
            <form onSubmit="" className={css.center}>
                <h2>Please Sign In</h2>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className={"text-light mt-2 "+css.signInBtn} style={{color:"white"}}>Sign In</button>
                <h2>&nbsp;</h2>
            </form>
        </div>
        </React.Fragment>
    )
}

export default SignIn