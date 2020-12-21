import oHttp from "../../aios-o"
import { ADD_INGREDIENT, DELETE_INGREDIENT, ERROR, SET_DATA } from "./actionTypes"

export const addIngredients=(ingredientName)=>{return{type: ADD_INGREDIENT,ingredientName:ingredientName}}
export const removeIngredients=(ingredientName)=>{return{type: DELETE_INGREDIENT,ingredientName:ingredientName}}

const setupdata=(ingredients) =>{return{type: SET_DATA,ingredients:ingredients}}
const setError=(error)=>{return {type:ERROR,error:true}}

export const getsetupdata=() => {return dispatch => oHttp.get("/ingredients.json").then(response=>{dispatch(setupdata(response.data))}).catch(error=>{console.log(error);dispatch(setError(error))})}
