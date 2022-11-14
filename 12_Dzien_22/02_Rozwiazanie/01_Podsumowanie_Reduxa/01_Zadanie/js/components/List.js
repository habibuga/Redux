// List

import React from 'react';

function List({list, counterValue, onSave, onRemove}) {
  return (
    <div>
      <button onClick={() => onSave(counterValue)}>zapisz</button>
      <ul>
        {list.map((item, index) => {
          return <li key={index} onClick={() => onRemove(index)}>{item}</li>;
        })}
      </ul>
    </div>
  )
}

export default List;
