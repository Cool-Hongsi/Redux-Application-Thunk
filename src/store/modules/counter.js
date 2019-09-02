const CHANGE_COLOR = 'CHANGE_COLOR';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const changeColor = (color) => {
    return { type : CHANGE_COLOR, color }
};

export const increment = () => {
    return { type : INCREMENT }
};

export const decrement = () => {
    return { type : DECREMENT }
};

const initialState = {
    color : "red",
    number : 1
};

export default function counter(state = initialState, action){
    switch(action.type){
        case CHANGE_COLOR:
            return { ...state, color : action.color }
        case INCREMENT:
            return { ...state, number : state.number + 1 }
        case DECREMENT:
            return { ...state, number : state.number - 1}
        default:
            return state
    }
};