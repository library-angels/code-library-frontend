import { getCounterState, getCount } from './selectors';

describe('todos selectors', () => {
    const store = {
        counterCollection: {
            count: 0,
        },
    };

    it('should return the counter state object', () => {
        const got = getCounterState(store);
        const want = {
            count: 0,
        };

        expect(got).toEqual(want);
    });

    it('should return the count value of counterCollection', () => {
        const got = getCount(store);
        const want = 0;

        expect(got).toEqual(want);
    });
});
