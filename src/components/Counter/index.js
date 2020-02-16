import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, reset } from '../../store/counter/actions';
import getCounterState from '../../store/counter/selectors';

import Button from '../Button';

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(getCounterState);

  const onReset = () => dispatch(reset());
  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());

  return (
    <div className="Counter">
      <h1>Count {count}</h1>
      <Button text="Increment" onClick={onIncrement} />
      <Button text="Decrement" onClick={onDecrement} />
      <Button text="Reset" onClick={onReset} />
    </div>
  );
};

export default Counter;
