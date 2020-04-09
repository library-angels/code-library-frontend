export const getDashboard = store => store.booksCollection.dashboard;
export const getAllBooks = store => store.booksCollection.all;
export const getCategory = category => store =>
    store.booksCollection.all[category] || [];
