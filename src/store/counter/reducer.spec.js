import { increment, decrement, reset } from './actions';
import counterReducer from './reducer';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        const got = counterReducer(undefined, {});
        const want = { count: 0 };

        expect(got).toEqual(want);
    });

    const initialState = {
        count: 10,
    };

    it('should handle INCREMENT', () => {
        const action = increment();
        const got = counterReducer(initialState, action);

        const want = {
            count: 11,
        };

        expect(got).toEqual(want);
    });

    it('should handle DECREMENT', () => {
        const action = decrement();
        const got = counterReducer(initialState, action);

        const want = {
            count: 9,
        };

        expect(got).toEqual(want);
    });

    it('should handle RESET', () => {
        const action = reset();
        const got = counterReducer(initialState, action);

        const want = {
            count: 0,
        };

        expect(got).toEqual(want);
    });
});
