// Counter

import React, { useEffect } from 'react';

function Counter({counter, initialValue, onStartCounting, onPause, onSet}) {

  useEffect(() => {
    if (initialValue) {
      onSet(Number(initialValue));
    }
  }, []);

  return (
    <div>
      <button disabled={counter.isCounting} onClick={() => onStartCounting()}>start</button>
      <button disabled={!counter.isCounting} onClick={() => onPause()}>stop</button>
      <h1>{ counter.value }</h1>
    </div>
  )
}

export default Counter;
