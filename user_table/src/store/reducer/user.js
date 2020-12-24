import { ADD_USER, DELETE_USER, RESET_INDEX, SET_INDEX, UPDATE_USER } from "../action/actionType"

const initialState = {
    users: [
        {
            name: "vvk",
            email: "v@var.com",
            userId: "V@1",
        },
    ],
    editIndex: null,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_INDEX: return { ...state, editIndex: null };
        case SET_INDEX: return { ...state, editIndex: action.index };
        case ADD_USER: return { ...state, users: [...state.users].concat(action.user) };
        case UPDATE_USER: const tempArray = [...state.users];
            tempArray[state.editIndex] = action.user;
            return { ...state, users: tempArray };
        case DELETE_USER: const temp = [...state.users];
            temp.splice(action.index, 1);
            return { ...state, users: temp };
        default: return state;
    };
};
export default reducer