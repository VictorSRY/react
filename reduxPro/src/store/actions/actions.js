export const INCREMENT = 'INCREMENT'
export const ADD = 'ADD'
export const DICREMENT ='DICREMENT'
export const SUB = 'SUB'
export const SAVE ='SAVE'
export const DELETE ='DELETE'

export const incre=()=>{
    return {
        type:INCREMENT,
    }
}

export const increment=()=>{
    return dispatch=>{
        setTimeout(() => {
            dispatch(incre())
        }, 2000);
    }
}

export const dicrement=()=>{
    return {
        type:DICREMENT,
    }
}

export const add=(val)=>{
    return {
        type:ADD,
        value:val
    }
}

export const sub=(val)=>{
    return {
        type:SUB,
        value:val
    }
}

export const saveR=(count)=>{
    return {
        type:SAVE,
        counter:count,
    }
}

export const deleteR= (index) =>{
    return {
        type:DELETE,
        index:index,
    }
}