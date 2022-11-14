// Akcje

// async start
// increase
// pause
// set
// remove

export const INCREASE = 'INCREASE';
export const PAUSE = 'PAUSE';
export const SAVE = 'SAVE';
export const REMOVE = 'REMOVE';

export const SET = 'SET';

let interval;

export const startCounting = () => (dispatch) => {
 interval = setInterval(() => {
    dispatch(increase());
  }, 1000);
}

export const increase = () => ({
  type: INCREASE,
});

export const pause = () => {
  clearInterval(interval);

  return {
    type: PAUSE,
  }
}

export const save = (payload) => ({
  type: SAVE,
  payload,
});

export const remove = (payload) => ({
  type: REMOVE,
  payload,
});

export const set = (payload) => ({
  type: SET,
  payload,
});
