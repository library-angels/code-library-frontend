import { combineReducers } from 'redux';

import counterReducer from './counter/reducer';
import usersReducer from './users/users.reducer';

const rootReducer = combineReducers({
    counterCollection: counterReducer,
    usersCollection: usersReducer,
});

export default rootReducer;
