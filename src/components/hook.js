import { useSelector, useDispatch } from 'react-redux';

import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    reset,
    resetAsync,
} from '../store/counter/actions';

import { getCount } from '../store/counter/selectors';

function useCounter() {
    const dispatch = useDispatch();

    return {
        state: {
            count: useSelector(getCount),
        },
        actions: {
            reset: () => dispatch(reset()),
            resetAsync: () => dispatch(resetAsync()),
            increment: () => dispatch(increment()),
            incrementAsync: () => dispatch(incrementAsync()),
            decrement: () => dispatch(decrement()),
            decrementAsync: () => dispatch(decrementAsync()),
        },
    };
}

export default useCounter;
