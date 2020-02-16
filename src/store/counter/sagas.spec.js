import { put, call } from 'redux-saga/effects';
import {
    onIncrementAsync,
    onDecrementAsync,
    onResetAsync,
    delay,
} from './sagas';
import { increment, decrement, reset } from './actions';

describe('Counter Sagas test', () => {
    describe('onIncrementAsync Saga test', () => {
        const gen = onIncrementAsync();

        it('onIncrementAsync Saga must call delay(1000)', () => {
            const got = gen.next().value;
            const want = call(delay, 1000);

            expect(got).toEqual(want);
        });

        it('onIncrementAsync Saga must dispatch an INCREMENT action', () => {
            const got = gen.next().value;
            const want = put(increment());

            expect(got).toEqual(want);
        });

        it('onIncrementAsync Saga must be done', () => {
            const got = gen.next();
            const want = {
                done: true,
                value: undefined,
            };

            expect(got).toEqual(want);
        });
    });

    describe('onDecrementAsync Saga test', () => {
        const gen = onDecrementAsync();

        it('onDecrementAsync Saga must call delay(1000)', () => {
            const got = gen.next().value;
            const want = call(delay, 1000);

            expect(got).toEqual(want);
        });

        it('onDecrementAsync Saga must dispatch an DECREMENT action', () => {
            const got = gen.next().value;
            const want = put(decrement());

            expect(got).toEqual(want);
        });

        it('onDecrementAsync Saga must be done', () => {
            const got = gen.next();
            const want = {
                done: true,
                value: undefined,
            };

            expect(got).toEqual(want);
        });
    });

    describe('onResetAsync Saga test', () => {
        const gen = onResetAsync();

        it('onResetAsync Saga must call delay(1000)', () => {
            const got = gen.next().value;
            const want = call(delay, 1000);

            expect(got).toEqual(want);
        });

        it('onResetAsync Saga must dispatch an ResetAsync action', () => {
            const got = gen.next().value;
            const want = put(reset());

            expect(got).toEqual(want);
        });

        it('onResetAsync Saga must be done', () => {
            const got = gen.next();
            const want = {
                done: true,
                value: undefined,
            };

            expect(got).toEqual(want);
        });
    });
});
