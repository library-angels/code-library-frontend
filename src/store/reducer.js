import { combineReducers } from 'redux';

import counterReducer from './counter/reducer';
import usersReducer from './users/users.reducer';
import toggleReducer from './toggle/toggle.reducer';
import bookDetailsReducer from './viewBookDetails/viewBookDetails.reducer';

const rootReducer = combineReducers({
    counterCollection: counterReducer,
    usersCollection: usersReducer,
    toggleCollection: toggleReducer,
    bookCollection: bookDetailsReducer,
});

export default rootReducer;
