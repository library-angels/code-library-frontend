const getDesignations = store =>
    store.booksCollection.designations.map(({ name }) => name);

const getBooksByCategory = category => store =>
    store.booksCollection.categories[category] || {};

const getBookByID = id => store => {
    return null;
};

const getBooksByIDs = ids => store => {
    return null;
};

const getDashboardBooks = store => {
    const designations = Object.keys(store.booksCollection.groups);
    const reducer = (acc, designation) => {
        // get 10 books for each category
        const books = Object.keys(store.booksCollection.groups[designation])
            .slice(0, 10)
            .map(bookID => store.booksCollection.groups[designation][bookID]);

        acc[designation] = books;
        return acc;
    };

    return designations.reduce(reducer, {});
};

const getBooks = store => store.booksCollection.books;

const BOOKS_SELECTORS = {
    getDashboardBooks,
    getBooksByCategory,
    getBookByID,
    getBooksByIDs,
    getDesignations,
    getBooks,
};

export default BOOKS_SELECTORS;
