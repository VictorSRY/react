import React, { useState } from "react"
import { connect } from "react-redux"
import css from "./SignIn.module.css"
import { signUp,signIn } from "../../store/action"
import { Redirect } from "react-router"

const SignIn = (props) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const getEmail=(event)=>{
        const temp=event.target.value;
        setEmail(temp);
    };

    const getPassword=(event)=>{
        const temp=event.target.value;
        setPassword(temp);
    };

    return (
        <React.Fragment>
            <div className={css.container} >
            <div className={css.top}></div>
            <div className={css.bottom}></div>
            <form className={css.center}>
                {props.auth?<Redirect to="/home"/>:null}
                <h2>Please Sign In</h2>
                <input type="email" value={email} onChange={getEmail} placeholder="email" />
                <input type="password" value={password} onChange={getPassword} placeholder="password" />
                <button className={"text-light mt-2 "+css.signInBtn} type="button" onClick={()=>props.signIn(email,password)} style={{color:"white"}}><h5>Sign In</h5></button>
                <h2>&nbsp;</h2>
            </form>
        </div>
        </React.Fragment>
    );
};

const mapStateToProps =(state)=>{
    return {
        auth:state.auth.authenticated,
    };
};

const mapDispatchToProps=dispatch=>{
    return {
        signUp:(email,password)=>dispatch(signUp(email,password)),
        signIn:(email,password)=>dispatch(signIn(email,password)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);