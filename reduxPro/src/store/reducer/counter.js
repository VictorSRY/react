import * as actions from "../actions/actions"
const inistialState={
    counter:0,
}
const counter = (state=inistialState,action)=>{
    console.log(state,action)
    switch(action.type){
        case actions.INCREMENT :return {...state,counter:state.counter+1};
        case actions.ADD:return {...state,counter:state.counter+action.value};
        case actions.DICREMENT:return {...state,counter:state.counter-1};
        case actions.SUB:return {...state,counter:state.counter-action.value};
    }
    return state
}
export default counter