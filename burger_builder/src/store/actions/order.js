import oHttp from "../../aios-o";
import { PURCHASE_FAILED, PURCHASE_SUCCESS } from "./actionTypes";

const addBurger=(burger)=>{
    return{
        type:PURCHASE_SUCCESS,
        burger:burger,
    }
}
const purchasError=(error)=>{
    return{
        type:PURCHASE_FAILED,
        error:error
    }
}

export const buyBurger=(orderData)=>{
    return dispatch => oHttp.post('/orders.json', orderData).then(response => {dispatch(addBurger(orderData))}).catch(error=>{dispatch(purchasError(error))})
}

