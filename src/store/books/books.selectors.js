const getCategories = store => Object.keys(store.booksCollection.categories);

const getBooksByCategory = category => store =>
    store.booksCollection.categories[category] || {};

const getBookByID = id => store => {
    const categories = getCategories(store);

    return categories.reduce((acc, category) => {
        const categoryBooksObject = store.booksCollection.categories[category];
        return categoryBooksObject[id] || acc;
    }, {});
};

const getBooksByIDs = ids => store => {
    const categories = getCategories(store);

    return categories.reduce((acc, category) => {
        const categoryBooksObject = store.booksCollection.categories[category];

        ids.forEach(id => {
            if (categoryBooksObject[id]) {
                acc.push(categoryBooksObject[id]);
            }
        });

        return acc;
    }, []);
};

const getDashboardBooks = store => {
    const categories = Object.keys(store.booksCollection.dashboardIDs);

    return categories.reduce((acc, category) => {
        acc[category] = [];

        const categoryBooksObject = store.booksCollection.categories[category];
        const categoryIDs = store.booksCollection.dashboardIDs[category];

        categoryIDs.forEach(id => {
            if (categoryBooksObject[id]) {
                acc[category].push(categoryBooksObject[id]);
            }
        });

        return acc;
    }, {});
};

const BOOKS_SELECTORS = {
    getCategories,
    getDashboardBooks,
    getBooksByCategory,
    getBookByID,
    getBooksByIDs,
};

export default BOOKS_SELECTORS;
