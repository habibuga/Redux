// store.js -> Logger

import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const loggerMiddleware = store => next => action => {
    console.log('middleware');
    console.log('store', store);
    console.log('next', next);
    console.log('action', action);

    if (action.payload === 'adam') {
        alert('nie może to być Adam, to musi być Michał');
        return next({...action, payload: 'michał'});
    }

    return next(action);
}

const store = createStore(reducers, applyMiddleware(loggerMiddleware));

export default store;