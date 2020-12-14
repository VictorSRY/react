import * as actions from "../actions/actions"
const inistialState={
    result:[]
}
const result = (state=inistialState,action)=>{
    console.log(state,action)
    switch(action.type){
        case actions.SAVE:return {...state,result:state.result.concat(action.counter)};
        case actions.DELETE:const tempResults=state.result.filter((_,index)=>index!==action.index); return {...state,result:tempResults};
    }
    return state
}
export default result