import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  incrementAsync,
  decrementAsync,
  resetAsync,
} from '../../store/counter/actions';
import getCounterState from '../../store/counter/selectors';

import Button from '../Button';

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(getCounterState);

  const onReset = () => dispatch(resetAsync());
  const onIncrement = () => dispatch(incrementAsync());
  const onDecrement = () => dispatch(decrementAsync());

  return (
    <div className="Counter">
      <h1>AsyncCount {count}</h1>
      <Button text="Increment" onClick={onIncrement} />
      <Button text="Decrement" onClick={onDecrement} />
      <Button text="Reset" onClick={onReset} />
    </div>
  );
};

export default Counter;
