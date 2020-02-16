import { put, call } from 'redux-saga/effects';
import { onIncrementAsync, delay } from './saga';

describe('onIncrementAsync Saga test', () => {
    const gen = onIncrementAsync();

    it('onIncrementAsync Saga must call delay(1000)', () => {
        const got = gen.next().value;
        const want = call(delay, 1000);

        expect(got).toEqual(want);
    });

    it('onIncrementAsync Saga must dispatch an INCREMENT action', () => {
        const got = gen.next().value;
        const want = put({ type: 'INCREMENT', payload: {} });

        expect(got).toEqual(want);
    });

    it('onIncrementAsync Saga must be done', () => {
        const got = gen.next();
        const want = { done: true, value: undefined };

        expect(got).toEqual(want);
    });
});
