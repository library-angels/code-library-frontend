import configureStore from 'redux-mock-store';
import {
    INCREMENT,
    DECREMENT,
    RESET,
    increment,
    decrement,
    reset,
} from './actions';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Counter action creators', () => {
    it('should create an action to increment counter action', () => {
        expect(increment()).toEqual({
            type: INCREMENT,
            payload: {},
        });
    });

    it('should create an action to decrement counter action', () => {
        expect(decrement()).toEqual({
            type: DECREMENT,
            payload: {},
        });
    });

    it('should create an action to reset counter action', () => {
        expect(reset()).toEqual({
            type: RESET,
            payload: {},
        });
    });
});

describe('Dispatch Counter actions', () => {
    it('should dispatch actions', () => {
        // Initialize mockstore with empty state
        const initialState = {};
        const store = mockStore(initialState);

        // Dispatch the action
        store.dispatch(increment());
        store.dispatch(decrement());
        store.dispatch(reset());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        const expectedPayload = [
            { type: INCREMENT, payload: {} },
            { type: DECREMENT, payload: {} },
            { type: RESET, payload: {} },
        ];

        expect(actions).toEqual(expectedPayload);
    });
});
