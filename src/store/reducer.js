import { combineReducers } from 'redux';

import accountReducer from './account/account.reducer';
import booksReducer from './books/books.reducer';
import booksSearchReducer from './search/search.reducer';
import loginReducer from './login/login.reducer';
import userReducer from './user/user.reducer';
import { LOGOUT_ACTIONS } from './logout/logout.actions';

const appReducer = combineReducers({
    booksCollection: booksReducer,
    booksSearch: booksSearchReducer,
    account: accountReducer,
    login: loginReducer,
    user: userReducer,
});

const { LOG_OUT } = LOGOUT_ACTIONS;
const rootReducer = (state, action) => {
    if (action.type === LOG_OUT) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
