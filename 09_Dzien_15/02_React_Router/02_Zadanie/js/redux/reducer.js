// Reducer z listą zadań

// ADD_TODO
// TOGGLE_TODO

import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actions";

// {
//   id,
//   task,
//   done,
// }

const reducer = (state = [], { type, payload }) => {
  switch(type) {
    case ADD_PRODUCT:
      return [...state, payload];
    case REMOVE_PRODUCT:
      return state.filter(prod => {
        return prod.name !== payload.name
      });
    default:
      return state;
  }
}

export default reducer;
