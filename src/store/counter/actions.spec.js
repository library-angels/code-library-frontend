import {
    INCREMENT,
    DECREMENT,
    RESET,
    increment,
    decrement,
    reset,
} from './actions';

describe('Counter actions', () => {
    it('should create an action to increment counter action', () => {
        const got = increment();
        const want = {
            type: INCREMENT,
            payload: {},
        };

        expect(got).toEqual(want);
    });

    it('should create an action to decrement counter action', () => {
        const got = decrement();
        const want = {
            type: DECREMENT,
            payload: {},
        };

        expect(got).toEqual(want);
    });

    it('should create an action to reset counter action', () => {
        const got = reset();
        const want = {
            type: RESET,
            payload: {},
        };

        expect(got).toEqual(want);
    });
});
