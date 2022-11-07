import { connect } from 'react-redux';

import { addTodo, toggleTodo } from '../redux/actions';

import Todo from '../components/Todo';

const selectTasks = (state, status) => {
  if (status === 'done') {
    return state.filter(s => s.done);
  }

  if (status === 'undone') {
    return state.filter(s => !s.done);
  }

  return state;
}

const mapStateToProps = (state, ownProps) => ({
  todo: selectTasks(state, ownProps.match.params.status),
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (payload) => dispatch(addTodo(payload)),
  toggleTodo: (payload) => dispatch(toggleTodo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
