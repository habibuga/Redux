// List

import React from "react";

const List = ({intervals, counter, save, remove}) => {
    return (
        <div>
            <button onClick={() => save(counter)}>Zapisz</button>
            <ul>
                {intervals.map((int, index) => <li key={index} onClick={() => remove(index)}>{int}</li>)}
            </ul>
        </div>
    )
}

export default List;
