// import configureStore from 'redux-mock-store';

// import { BOOKS_ACTIONS, BOOKS_ACTION_CREATORS } from './books.actions';

// const {
//     BOOKS_REQUEST_DASHBOARD,
//     BOOKS_RECEIVE_DASHBOARD,
//     BOOKS_REQUEST_ALL,
//     BOOKS_RECEIVE_ALL,
// } = BOOKS_ACTIONS;

// const {
//     booksRequestDashboard,
//     booksReceiveDashboard,
//     booksRequestAll,
//     booksReceiveAll,
// } = BOOKS_ACTION_CREATORS;

// const initialState = {
//     dashboard: {},
//     all: {},
// };

// describe('Books action creators', () => {
//     const { dashboard, all } = initialState;

//     it('should create an action to request dashboard books', () => {
//         const got = booksRequestDashboard();
//         const want = {
//             type: BOOKS_REQUEST_DASHBOARD,
//             payload: {},
//         };

//         expect(got).toEqual(want);
//     });

//     it('should create an action to receive dashboard books', () => {
//         const got = booksReceiveDashboard(dashboard);
//         const want = {
//             type: BOOKS_RECEIVE_DASHBOARD,
//             payload: {
//                 books: dashboard,
//             },
//         };

//         expect(got).toEqual(want);
//     });

//     it('should create an action to request all books', () => {
//         const got = booksRequestAll();
//         const want = {
//             type: BOOKS_REQUEST_ALL,
//             payload: {},
//         };

//         expect(got).toEqual(want);
//     });

//     it('should create an action to receive all books', () => {
//         const got = booksReceiveAll(all);
//         const want = {
//             type: BOOKS_RECEIVE_ALL,
//             payload: {
//                 books: all,
//             },
//         };

//         expect(got).toEqual(want);
//     });
// });

// describe('Dispatch Books actions', () => {
//     it('should dispatch actions', () => {
//         const mockStore = configureStore([]);
//         const store = mockStore(initialState);

//         const { dashboard, all } = store;

//         store.dispatch(booksRequestDashboard());
//         store.dispatch(booksReceiveDashboard(dashboard));
//         store.dispatch(booksRequestAll());
//         store.dispatch(booksReceiveAll(all));

//         const got = store.getActions();
//         const want = [
//             {
//                 type: BOOKS_REQUEST_DASHBOARD,
//                 payload: {},
//             },
//             {
//                 type: BOOKS_RECEIVE_DASHBOARD,
//                 payload: {
//                     books: dashboard,
//                 },
//             },
//             {
//                 type: BOOKS_REQUEST_ALL,
//                 payload: {},
//             },
//             {
//                 type: BOOKS_RECEIVE_ALL,
//                 payload: {
//                     books: all,
//                 },
//             },
//         ];

//         expect(got).toEqual(want);
//     });
// });
