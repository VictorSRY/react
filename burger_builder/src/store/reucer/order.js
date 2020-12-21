const { PURCHASE_SUCCESS, PURCHASE_FAILED, PURCHASE_LOADING, PURCHASE_INIT, SET_ORDERS } = require("../actions/actionTypes")

const initialState={
    orders:[],
    error:false,
    loading:false,
    purchased:false,
}

const reucer=(state=initialState,action)=>{
    switch(action.type){
        case PURCHASE_SUCCESS:return {...state,orders:state.orders.concat(action.order),loading:false,purchased:true}
        case PURCHASE_FAILED:return {...state,error:true,loading:false}
        case PURCHASE_LOADING:return {...state,loading:true}
        case PURCHASE_INIT:return {...state,loading:false,purchased:false}
        case SET_ORDERS:return {...state,orders:action.orders}
        default: return state
    }
}
export default reucer