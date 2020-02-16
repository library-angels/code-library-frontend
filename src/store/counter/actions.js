export const INCREMENT = 'INCREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const DECREMENT = 'DECREMENT';
export const DECREMENT_ASYNC = 'DECREMENT_ASYNC';
export const RESET = 'RESET';
export const RESET_ASYNC = 'RESET_ASYNC';

export const increment = () => ({
  type: INCREMENT,
  payload: {},
});

export const incrementAsync = () => ({
  type: INCREMENT_ASYNC,
  payload: {},
});

export const decrement = () => ({
  type: DECREMENT,
  payload: {},
});

export const decrementAsync = () => ({
  type: DECREMENT_ASYNC,
  payload: {},
});

export const reset = () => ({
  type: RESET,
  payload: {},
});

export const resetAsync = () => ({
  type: RESET_ASYNC,
  payload: {},
});
