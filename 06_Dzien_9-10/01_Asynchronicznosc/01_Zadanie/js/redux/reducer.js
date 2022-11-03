import { combineReducers } from "redux";

import { QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, startFetching, quoteFetched, quoteError } from "./actions"

const initialState = {
    loading: false,
    error: "",
    quote: null
};

const quote = (state=initialState, {type, payload}) => {
    switch (type) {
        case QUOTE_FETCHING: {
            return null;
        }
        case QUOTE_FETCHED: {
            return null;
        }
        case QUOTE_ERROR: {
            return null;
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
  quote,
});
