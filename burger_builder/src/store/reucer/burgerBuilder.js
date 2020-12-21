import * as reducerAction from "../actions/actionTypes"
const INGREDIENTS_PRICE = {salad: 10,bacon: 20,cheese: 15,meat: 30,}
const initialState ={
    ingredients:null,
    /*{
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    }*/
    totalPrice:40,
    error:false,
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case reducerAction.ADD_INGREDIENT :return {...state,ingredients:{...state.ingredients,[action.ingredientName]:state.ingredients[action.ingredientName]+1},totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName],};
        case reducerAction.DELETE_INGREDIENT :return state.ingredients[action.ingredientName]>0?{...state,ingredients:{...state.ingredients,[action.ingredientName]:state.ingredients[action.ingredientName]-1},totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName],}:state;
        case reducerAction.SET_DATA :return {...state,ingredients:action.ingredients,totalPrice:initialState.totalPrice}
        case reducerAction.ERROR :return {...state,error:true}
        default: return state;
    }
}
export default reducer;