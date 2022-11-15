// export default combineReducers({
//   counter,
//   list
// })


import { combineReducers } from "redux";

import { INCREASE, PAUSE, SAVE, REMOVE, SET } from "./actions";

const initialState = {
    isCounting: false,
    value: 0
}

const counter = (state=initialState, {type, payload}) => {
    switch (type) {
        case SET: {
            return {
                ...state,
                value: payload
            }
        }

        case INCREASE: {
            return {
                isCounting: true,
                value: state.value + 1
            }
        }
        case PAUSE: {
            return {
                isCounting: false,
                value: state.value
            }
    }
        default: {
            return state;
        }
    }
}

const list = (state=[], {type, payload}) => {
    switch (type) {
        case SAVE: {
            return [...state, payload]
        }
        case REMOVE: {
            return state.filter((el, index) => index !== payload)
        }
        default: {
            return state
        }
    }
}

export default combineReducers({
    counter,
    list
});
