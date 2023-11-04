import { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);

    const decrementClickhandler = () => {
        setCount(count => count - 1);
    }

    const clearCounterHandler = () => {
        setCount(0);
    }

    const increaseCounterHandler = () => {
        setCount(count => count + 1);
    }


    return (
        <div>
            <p>{count}</p>

            {count < 0 ? <p>Invalid count!</p> : null}

            {count == 0 && <p>Please start incrementing!</p>}

            <button disabled={count < 0} onClick={decrementClickhandler}>-</button>
            <button onClick={clearCounterHandler}>Clear</button>
            <button onClick={increaseCounterHandler}>+</button>
        </div>
    );
}