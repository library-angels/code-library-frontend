import { combineReducers } from 'redux';

import counterReducer from './counter/reducer';
import usersReducer from './users/users.reducer';
import booksReducer from './books/books.reducer';

const rootReducer = combineReducers({
    counterCollection: counterReducer,
    usersCollection: usersReducer,
    booksCollection: booksReducer,
});

export default rootReducer;
