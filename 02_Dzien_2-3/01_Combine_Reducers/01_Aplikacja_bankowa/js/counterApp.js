import {createStore} from "redux";
import {increment, decrement} from "./redux/actions/counterActions";
import reducer from "./redux/reducers/index";

export default function () {
  const {dispatch, subscribe, getState} = createStore(reducer);

  const unsubscribe = subscribe(() => {
    console.log(`from subscribe ${getState().counter}`);
  });

  dispatch(increment(5));
  dispatch(decrement(2));

  unsubscribe();

  dispatch(decrement(2));
  console.log(getState().counter);
}
