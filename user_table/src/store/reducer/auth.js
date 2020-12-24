import { SET_AUTH } from "../action/actionType";

const initial={
    authenticated:false
}

const authReducer = (state=initial,action)=>{
    switch(action.type){
        case SET_AUTH : return {...state,authenticated:action.state};
        default : return state;
    }
}

export default authReducer 