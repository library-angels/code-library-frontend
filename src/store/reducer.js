import { combineReducers } from 'redux';

import accountReducer from './account/account.reducer';
import booksReducer from './books/books.reducer';
import booksSearchReducer from './search/search.reducer';

const rootReducer = combineReducers({
    booksCollection2: booksReducer,
    booksSearch: booksSearchReducer,
    account: accountReducer,
});

export default rootReducer;
