export const selectTasks = (state, status) => {
  if (status === 'done') {
    return state.filter(s => s.done);
  }

  if (status === 'undone') {
    return state.filter(s => !s.done);
  }

  return state;
}
