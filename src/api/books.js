import data from '../library.json';

const categories = data.reduce((acc, book) => {
    const { designation } = book;
    if (acc[designation] === undefined) {
        acc[designation] = [];
    }
    acc[designation].push(book);
    return acc;
}, {});

const allBooks = Object.keys(categories).reduce((acc, category) => {
    acc[category] = categories[category];
    return acc;
}, {});

export function fetchDashboardBooks() {
    return new Promise(resolve => {
        setTimeout(() => {
            const dashboardBooks = Object.keys(categories).reduce(
                (acc, category) => {
                    const categoryBooks = categories[category];
                    const randomIndexCache = [];
                    const randomBooks = [];

                    for (let i = 0; i < 10; i += 1) {
                        // eslint-disable-next-line no-constant-condition
                        while (true) {
                            const random = Math.floor(
                                Math.random() * categoryBooks.length,
                            );

                            if (!randomIndexCache.includes(random)) {
                                randomIndexCache.push(random);
                                randomBooks.push(categoryBooks[random]);
                                break;
                            }
                        }
                    }

                    acc[category] = randomBooks;
                    return acc;
                },
                {},
            );

            resolve(dashboardBooks);
        }, 1000);
    });
}

export function fetchAllBooks() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(allBooks);
        }, 1000);
    });
}
