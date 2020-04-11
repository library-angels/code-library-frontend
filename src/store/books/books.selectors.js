export const getDashboard = store => store.booksCollection2.dashboard;
export const getAllBooks = store => store.booksCollection2.all;
export const getCategory = category => store =>
    store.booksCollection2.all[category] || [];

export const getBookByID = id => store => {
    const allBooks = store.booksCollection2.all;
    const allCategories = Object.keys(store.booksCollection2.all);

    let found = null;

    allCategories.forEach(category => {
        const categoryBooks = allBooks[category];

        if (!found) {
            categoryBooks.forEach(book => {
                if (book.id === id) {
                    found = book;
                }
                return null;
            });
        }

        return null;
    });

    return found;
};
