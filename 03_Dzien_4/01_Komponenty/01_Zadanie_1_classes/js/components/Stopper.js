import React from "react";

import withTimer from '../hoc/withTimer';

// Zamień ciało funkcji tak aby renderowała Stopper wg. treści zadania
const Stopper = ({ children, counter, startTimer, stopTimer }) => {
    return (
        <>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <p>Wartość licznika: {counter}</p>
            {children}
        </>
    )
};

// Zamień deklarację komponentu poniżej tak aby korzystał z wczesniej zamiplementowanego HOC withTimer
const StopperWithTimer = withTimer(Stopper);

export { Stopper, StopperWithTimer };