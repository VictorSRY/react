import { ADD_USER, DELETE_USER, RESET_INDEX, SET_INDEX, UPDATE_USER } from "./actionType"

export const resetIndex = () => {
    return { type: RESET_INDEX };
};
export const setIndex = (index,history) => {
    history.push("/edit")
    return { type: SET_INDEX, index: index };
};

const adduser = (user) => {
    return { type: ADD_USER, user: user };
};
export const addUser = (user, history) => {
    return dispatch => { dispatch(adduser(user)); history.goBack(); };
};

const updateuser = (user) => {
    return { type: UPDATE_USER, user: user };
};
export const updateUser = (user, history) => {
    return dispatch => { dispatch(updateuser(user)); history.goBack(); };
};

const removeuser = (index) => {
    return { type: DELETE_USER, index: index };
};
export const deleteUser = (index) => {
    return dispatch => { dispatch(removeuser(index)) };
};