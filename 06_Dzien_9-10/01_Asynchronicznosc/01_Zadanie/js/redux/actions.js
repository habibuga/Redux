// Plik z akcjami

const QUOTE_FETCHING = "QUOTE_FETCHING";
const QUOTE_FETCHED = "QUOTE_FETCHED";
const QUOTE_ERROR = "QUOTE_ERROR";

const startFetching = (payload) => ({
    type: QUOTE_FETCHING,
    payload: payload,
});

const quoteFetched = (payload) => ({
    type: QUOTE_FETCHED,
    payload: payload,
});

const quoteError = (payload) => ({
    type: QUOTE_ERROR,
    payload: payload,
});

export { QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, startFetching, quoteFetched, quoteError };