import {INCREMENT, DECREMENT, ADD_PRODUCT, CHANGE_ORDER} from "./actions";
import {combineReducers} from "redux";

const counter = (state=0, {type}) => {
  switch(type) {
    case INCREMENT:
      return state + 1

    case DECREMENT:
      return state - 1

    default:
      return state
  }
}

const products = (state=[], {type, item, posChange, curPos}) => {
  switch (type) {
    case ADD_PRODUCT:
      return [...state, item]

    case CHANGE_ORDER:
      return [...state.splice(curPos, 1)]

    default:
      return state
  }
}

export default combineReducers({
  counter,
  products
});
