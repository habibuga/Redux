// Reducer z listą zadań

// ADD_TODO
// TOGGLE_TODO

import { ADD_TODO, TOGGLE_TODO } from "./actions";

// {
//   id,
//   task,
//   done,
// }

const reducer = (state = [], { type, payload }) => {
  switch(type) {
    case ADD_TODO:
      return [...state, {...payload, id: state.length + 1}];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === payload) {
          todo.done = !todo.done;
        }

        return todo;
      });
    default:
      return state;
  }
}

export default reducer;
