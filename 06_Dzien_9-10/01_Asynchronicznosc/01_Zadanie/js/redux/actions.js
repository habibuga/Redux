// Plik z akcjami
import API from '../api/index';

const QUOTE_FETCHING = "QUOTE_FETCHING";
const QUOTE_FETCHED = "QUOTE_FETCHED";
const QUOTE_ERROR = "QUOTE_ERROR";
const ADD_FAV = "ADD_FAV";

// export const fetchQuote = () => dispatch => ...

const fetchQuote = () => {
    return (dispatch) => {
        // Nasz kod asynchroniczny

        dispatch(startFetching());

        API.fetchQuote()
            .then(response => {
                dispatch(quoteFetched(response));
            })
            .catch(error => {
                dispatch(quoteError(error));
            });
    }
}

const startFetching = () => ({
    type: QUOTE_FETCHING,
});

const quoteFetched = (payload) => ({
    type: QUOTE_FETCHED,
    payload: payload,
});

const quoteError = (payload) => ({
    type: QUOTE_ERROR,
    payload: payload,
});

const addFavourite = (payload) => ({
    type: ADD_FAV,
    payload: payload,
});

export { QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, ADD_FAV, startFetching, quoteFetched, quoteError, fetchQuote,
    addFavourite };