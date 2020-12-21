import oHttp from "../../aios-o";
import { PURCHASE_FAILED, PURCHASE_INIT, PURCHASE_LOADING, PURCHASE_SUCCESS, SET_ORDERS } from "./actionTypes";

const addBurger=(order)=>{return{type:PURCHASE_SUCCESS,order:order,}}
const purchasError=(error)=>{return{type:PURCHASE_FAILED,error:error,}}
const purchasLoading=()=>{return{type:PURCHASE_LOADING,}}
const setOrders=(orders)=>{return {type:SET_ORDERS,orders:orders}}

export const buyBurger=(orderData)=>{return dispatch => {dispatch(purchasLoading());oHttp.post('/orders.json', orderData).then(response => {dispatch(addBurger(orderData))}).catch(error=>{dispatch(purchasError(error))})}}
export const orderInIt=()=>{return {type:PURCHASE_INIT}}
export const getOrders=()=>{return dispatch=>{oHttp.get('/orders.json').then(response => {const dataArray=[];for(let key in response.data){dataArray.push(response.data[key])};dispatch(setOrders(dataArray));}).catch(error => {dispatch(purchasError(error));})}}