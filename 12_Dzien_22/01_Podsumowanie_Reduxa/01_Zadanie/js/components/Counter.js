// Counter

import React, {useEffect} from "react";

const Counter = ({initialValue, isCounting, value, startCounter, pause, onSet}) => {

    useEffect(() => {
        if (initialValue) {
            onSet(Number(initialValue));
        }
    }, []);

    return (
        <div>
            <button disabled={isCounting} onClick={() => startCounter()}>start</button>
            <button disabled={!isCounting} onClick={() => pause()}>stop</button>
            <h1>{value}</h1>
        </div>
    )
}

export default Counter;
