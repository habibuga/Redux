import React, { useState } from 'react';

function Todo({ todo, addTodo, toggleTodo }) {

  const [input, setInput] = useState('');

  return (
    <>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="button" onClick={() => addTodo({ done: false, task: input })}>Dodaj</button>
      </form>
      <ul>
        {todo.map(t => {
          return <li key={t.id} onClick={() => toggleTodo(t.id)} style={{ textDecoration: t.done ? 'line-through' : '' }}>{t.task}</li>
        })}
      </ul>
    </>
  )

}

export default Todo;
