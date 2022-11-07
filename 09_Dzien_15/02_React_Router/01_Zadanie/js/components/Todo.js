import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addTodo, toggleTodo } from '../redux/actions';
import { selectTasks } from '../redux/selectors';

function Todo() {

  const dispatch = useDispatch();
  const { status } = useParams();
  const todo = useSelector(state => selectTasks(state, status));

  const [input, setInput] = useState('');

  return (
    <>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="button" onClick={() => dispatch(addTodo({ done: false, task: input }))}>Dodaj</button>
      </form>
      <ul>
        {todo.map(t => {
          return <li key={t.id} onClick={() => dispatch(toggleTodo(t.id))} style={{ textDecoration: t.done ? 'line-through' : '' }}>{t.task}</li>
        })}
      </ul>
    </>
  )

}

export default Todo;
