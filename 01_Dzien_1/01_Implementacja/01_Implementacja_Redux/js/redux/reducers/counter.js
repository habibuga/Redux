/**
 * Tutaj zaimplementuj reducer do aplikacji counter
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default counterReducer;
 */

import { INCREMENT, DECREMENT } from "../actions/counterActions";

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
}

export default counterReducer;
