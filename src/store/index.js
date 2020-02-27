import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';
import rootSaga from './saga';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );
    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
