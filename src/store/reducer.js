import { combineReducers } from 'redux';

import toggleReducer from './toggle/toggle.reducer';
import bookDetailsReducer from './viewBookDetails/viewBookDetails.reducer';

import booksReducer from './books/books.reducer';
import booksSearchReducer from './search/search.reducer';

const rootReducer = combineReducers({
    toggleCollection: toggleReducer,
    bookCollection: bookDetailsReducer,
    booksCollection2: booksReducer,
    booksSearch: booksSearchReducer,
});

export default rootReducer;
