import { combineReducers } from 'redux';

import counterReducer from './counter/reducer';

const rootReducer = combineReducers({
  counterCollection: counterReducer,
});

export default rootReducer;
