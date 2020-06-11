import { combineReducers } from 'redux';

import accountReducer from './account/account.reducer';
import booksReducer from './books/books.reducer';
import booksSearchReducer from './search/search.reducer';
import loginReducer from './login/login.reducer';

const rootReducer = combineReducers({
    booksCollection: booksReducer,
    booksSearch: booksSearchReducer,
    account: accountReducer,
    login: loginReducer,
});

export default rootReducer;
