/**
 * Zadanie z wykładowcą
 * Implementacja własnego Store
 */
const createStore = (reducerFunction, initialState) => {

  let currentState = initialState;
  let listeners = [];

  return {
    dispatch(action) {
      currentState = reducerFunction(currentState, action);
      listeners.forEach(listener => listener());
    },
    getState() {
      return currentState;
    },
    subscribe(listener) {
      listeners.push(listener);

      return function() {
        listeners = listeners.filter(currentListener => currentListener !== listener);
      }
    }
  }

}

export { createStore };
