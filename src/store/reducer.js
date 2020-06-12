import { combineReducers } from 'redux';

import accountReducer from './account/account.reducer';
import booksReducer from './books/books.reducer';
import booksSearchReducer from './search/search.reducer';
import loginReducer from './login/login.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    booksCollection: booksReducer,
    booksSearch: booksSearchReducer,
    account: accountReducer,
    login: loginReducer,
    user: userReducer,
});

export default rootReducer;
