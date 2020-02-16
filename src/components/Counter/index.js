import React from 'react';
import Button from '../Button';

import useCounter from '../hook';

const Counter = () => {
    const { actions, state } = useCounter();
    const { increment, decrement, reset } = actions;

    return (
        <div className="Counter">
            <h1>Count {state.count}</h1>
            <Button text="Increment" onClick={increment} />
            <Button text="Decrement" onClick={decrement} />
            <Button text="Reset" onClick={reset} />
        </div>
    );
};

export const AsyncCounter = () => {
    const { actions, state } = useCounter();
    const { incrementAsync, decrementAsync, resetAsync } = actions;

    return (
        <div className="Counter">
            <h1>AsyncCount {state.count}</h1>
            <Button text="Increment" onClick={incrementAsync} />
            <Button text="Decrement" onClick={decrementAsync} />
            <Button text="Reset" onClick={resetAsync} />
        </div>
    );
};

export default Counter;
