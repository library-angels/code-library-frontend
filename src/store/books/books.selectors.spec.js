// import { getDashboard, getAllBooks, getCategory } from './books.selectors';

// const store = {
//     booksCollection: {
//         dashboard: {},
//         all: {},
//     },
// };

// describe('Books selectors', () => {
//     const {
//         booksCollection: { dashboard, all },
//     } = store;

//     it('should return the dashboard books', () => {
//         const got = getDashboard(store);
//         const want = dashboard;

//         expect(got).toEqual(want);
//     });

//     it('should return all books', () => {
//         const got = getAllBooks(store);
//         const want = all;

//         expect(got).toEqual(want);
//     });
// });

// describe('Books category selectors', () => {
//     const categories = ['ID', 'SE', 'PM', 'STS'];

//     const {
//         booksCollection: { all },
//     } = store;

//     const createBook = () => Object.create({});

//     categories.forEach(c => {
//         all[c] = [];

//         for (let i = 0; i < Math.floor(Math.random() * 10); i += 1) {
//             all[c].push(createBook());
//         }
//     });

//     it('should return books by category', () => {
//         categories.forEach(c => {
//             const curry = getCategory(c);

//             const got = curry(store);
//             const want = all[c];

//             expect(got).toEqual(want);
//         });
//     });

//     it('should return an empty array for a non-existing category', () => {
//         const curry = getCategory('NON-EXISTENT');

//         const got = curry(store);
//         const want = [];

//         expect(got).toEqual(want);
//     });
// });
