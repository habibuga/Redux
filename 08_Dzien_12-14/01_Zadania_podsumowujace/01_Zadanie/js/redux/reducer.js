// Miejsce na reducer

import { combineReducers } from "redux";

import { DEPLOYED } from "./actions";

const initialState = {
    launched: false,
    counter: 5
}

const rocket = (state=initialState, {type, payload}) => {
    switch (type) {
        case DEPLOYED: {
            if (state.counter !== 0) {
                return {
                    launched: false,
                    counter: state.counter - 1
                }
            } else {
                return {
                    ...state,
                    launched: true
                }
            }
        }
        default: {
           return state;
        }
    }
}

export default combineReducers({
    rocket,
});
