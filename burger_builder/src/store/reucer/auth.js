import { LOGIN_ERROR, RESET_LOGIN_ERROR, SET_AUTH } from "../actions/actionTypes";

const initialState={
    authenticated:false,
    error:false,
    errorMessage:null
};
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_AUTH:return {...state,authenticated:action.state};
        case LOGIN_ERROR:return {...state,error:true,errorMessage:action.message};
        case RESET_LOGIN_ERROR:return {...state,error:false};
        default:return state;
    };
};
export default reducer;