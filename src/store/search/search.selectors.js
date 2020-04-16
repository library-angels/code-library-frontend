const getFields = store => store.booksSearch.fields;
const getField = store => store.booksSearch.field;
const getInput = store => store.booksSearch.input;

const SEARCH_SELECTORS = {
    getFields,
    getField,
    getInput,
};

export default SEARCH_SELECTORS;
