import { combineReducers } from "redux";

import {QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, ADD_FAV} from "./actions"

const initialState = {
    loading: false,
    error: "",
    quote: null
};

const quote = (state=initialState, {type, payload}) => {
    switch (type) {
        case QUOTE_FETCHING: {
            return {
                ...state,
                loading: true,
            };
        }
        case QUOTE_FETCHED: {
            return {
                ...state,
                quote: payload,
                loading: false,
            };
        }
        case QUOTE_ERROR: {
            return {
                ...state,
                error: payload,
                loading: false,
            };
        }
        default: {
            return state;
        }
    }
}

const favourites = (state=[], { type, payload }) => {
    switch(type) {
        case ADD_FAV: {
            return [...state, payload]
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    quote,
    favourites,
});
