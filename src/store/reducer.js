import { combineReducers } from 'redux';

import counterReducer from './counter/reducer';
import usersReducer from './users/users.reducer';
import toggleReducer from './toggle/toggle.reducer';

const rootReducer = combineReducers({
    counterCollection: counterReducer,
    usersCollection: usersReducer,
    toggleCollection: toggleReducer,
});

export default rootReducer;
