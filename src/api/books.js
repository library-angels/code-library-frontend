import data from '../library.json';

const booksByCategory = data.reduce((acc, book) => {
    const { designation } = book;
    if (acc[designation] === undefined) {
        acc[designation] = [];
    }
    acc[designation].push(book);
    return acc;
}, {});

// Returns an array of designation objects
// where the id of a book is mapped to it's details
const getAllBooksByCategory = Object.keys(booksByCategory).reduce(
    (acc, category) => {
        const categoryBooks = booksByCategory[category];

        acc[category] = {};
        categoryBooks.forEach(book => {
            acc[category][book.id] = book;
        });

        return acc;
    },
    {},
);

function fetchDashboardIDs() {
    return new Promise(resolve => {
        setTimeout(() => {
            const randomIDs = Object.keys(booksByCategory).reduce(
                (acc, category) => {
                    acc[category] = [];

                    const categoryBooks = booksByCategory[category];

                    const min = categoryBooks[0].id;
                    const max = categoryBooks[categoryBooks.length - 1].id;

                    const randomIndexCache = {};
                    while (acc[category].length < 10) {
                        const randomIndex =
                            Math.floor(Math.random() * (max - min)) + min;

                        if (!randomIndexCache[randomIndex]) {
                            randomIndexCache[randomIndex] = 1;
                            acc[category].push(randomIndex);
                        }
                    }

                    return acc;
                },
                {},
            );

            resolve(randomIDs);
        }, 1000);
    });
}

// eslint-disable-next-line import/prefer-default-export
function fetchAllBooks() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(getAllBooksByCategory);
        }, 1000);
    });
}

const api = {
    fetchAllBooks,
    fetchDashboardIDs,
};

export default api;
