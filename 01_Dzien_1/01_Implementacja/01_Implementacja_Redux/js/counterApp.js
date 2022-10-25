// Tu dodaj odpowiednie importy (createStore, akcje, reducer)
import { createStore } from './redux/customStore';

// import { createStore } from 'redux';

import { increment, decrement } from './redux/actions/counterActions';

import reducer from './redux/reducers/index';

// Gdyby tylko jeden reducer
// import reducer from './redux/reducers/counter.js';

// const initialState = {
//   counter: 100,
// }

// Gdyby tylko jeden reducer
// const initialState = 0;

// const store = createStore(reducer, initialState);
const store = createStore(reducer);

export default function () {
  // Tutaj zaimplementuj aplikację counter wg. opisu zadania
  // W konsoli powinno pojawić się odpowiednio:
  //
  // from subscribe 5
  // from subscribe 3
  // 1

  const unsubscribe = store.subscribe(() => {
    // UI
    const accountBalance = store.getState().counter;
    document.querySelector('h1').innerText = `Stan konta: ${accountBalance}`;

    // Gdyby tylko jeden reducer
    // console.log(`from subscribe ${store.getState()}`);
    console.log(`from subscribe ${store.getState().counter}`);
  });

  // UI
  document.querySelector('#deposit').addEventListener('click', () => {
    store.dispatch(increment(10));
  });

  document.querySelector('#withdraw').addEventListener('click', () => {
    store.dispatch(decrement(10));
  });

  document.querySelector('#customDeposit').addEventListener('click', () => {
    store.dispatch(increment(Number(document.querySelector('input').value)));
  });

  // store.dispatch(increment(5));
  // store.dispatch(decrement(2));

  // unsubscribe();

  // store.dispatch(decrement(2));

  // console.log('wartość stanu: ', store.getState().counter);

  // Gdyby tylko jeden reducer
  // console.log('wartość stanu: ', store.getState());

}
