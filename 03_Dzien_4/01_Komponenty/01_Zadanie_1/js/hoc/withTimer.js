/**
 * Napisz HOC implementujący licznik
 *
 * Nie zapomnij wyeksportować!
 * export default withTimer;
 */

import React, { useState } from 'react';

function withTimer(Component) {

    let intervalID;

    return (props) => {


        const [ counter, setCounter ] = useState(0);

        const startTimer = () => {
            intervalID = setInterval(() => {
                setCounter(prev => prev + 1);
            }, 1000);
        }

        const stopTimer = () => {
            clearInterval(intervalID);
        }

        return <Component {...props} counter={counter} startTimer={startTimer} stopTimer={stopTimer} />

    }

}

export default withTimer;