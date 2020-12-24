import defaultFire from "../../firebase/firebase_config";
import { SET_AUTH } from "./actionType";


const setAuth = (state) => {
    return { type: SET_AUTH, state: state };
};

export const signUp = (email, password) => {
    return dispatch => { 
        defaultFire.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {console.log("signUp Successfull"); dispatch(setAuth(true)); })
        .catch(error=>{console.log(error);});
    };
};

export const signIn = (email, password) => {
    return dispatch => { 
        defaultFire.auth().signInWithEmailAndPassword(email, password)
        .then(response => { console.log("signIn Successfull",defaultFire.auth().currentUser); dispatch(setAuth(true)); })
        .catch(error=>{console.log(error);});
    };
};

export const signOut = () => {
    return dispatch => { 
        defaultFire.auth().signOut()
        .then(response => { console.log("signOut Successfull"); dispatch(setAuth(false)); }) 
    };
};