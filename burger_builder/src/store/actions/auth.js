import { defaultFirebase } from "../../firbase/config";
import { LOGIN_ERROR, SET_AUTH } from "./actionTypes";

const setAuth=(state)=>{return {type:SET_AUTH,state:state}};
const logInError=(message)=>{return {type:LOGIN_ERROR,message:message}}

export const signIn=(data)=>{
    return dispatch=>{defaultFirebase.auth().signInWithEmailAndPassword(data.email,data.password)
        .then(user=>{console.log("SignIn success");dispatch(setAuth(true))})
        .catch(error=>{dispatch(logInError(error.message))})
    };};
export const signOut=()=>{console.log("signOut");return {type:SET_AUTH,state:false}}