// Akcje

const INCREASE = "INCREASE";
const PAUSE = "PAUSE";
const SAVE = "SAVE";
const REMOVE = "REMOVE";
const SET = 'SET';

let newInt;

const startCounter = () => (dispatch) => {
    newInt = setInterval(() => {dispatch(increase())}, 1000)
}

const increase = () => ({
    type: INCREASE,
})

const pause = () => {
    clearInterval(newInt);
    return {
    type: PAUSE
}}

const save = (payload) => ({
    type: SAVE,
    payload: payload
})

const remove = (payload) => ({
    type: REMOVE,
    payload: payload
})

const set = (payload) => ({
    type: SET,
    payload: payload,
});

export {INCREASE, PAUSE, SAVE, REMOVE, SET, startCounter, pause, save, remove, set};
