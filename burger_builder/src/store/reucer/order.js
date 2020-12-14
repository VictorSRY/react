const { PURCHASE_SUCCESS, PURCHASE_FAILED } = require("../actions/actionTypes")

const initialState={
    burgers:[],
    error:false,
}

const reucer=(state=initialState,action)=>{
    switch(action.type){
        case PURCHASE_SUCCESS:return {...state,burgers:burgers.concat(action.burger)}
        case PURCHASE_FAILED:return {...state,error:true}
        default: return state
    }
}
export default reucer