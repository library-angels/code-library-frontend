import { combineReducers } from 'redux';

import booksReducer from './books/books.reducer';
import booksSearchReducer from './search/search.reducer';

const rootReducer = combineReducers({
    booksCollection: booksReducer,
    booksSearch: booksSearchReducer,
});

export default rootReducer;
