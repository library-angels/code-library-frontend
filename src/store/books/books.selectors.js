export const getIndex = store => store.booksCollection.index;

export const getCache = store => store.booksCollection.cache;

export const getDesignations = store => store.booksCollection.designations;

export const getDashboardScrollHeight = store =>
    store.booksCollection.dashboardScrollHeight;

export const getDesignationCache = designation_id => store => {
    const designationCache = store.booksCollection.cache[designation_id];

    return designationCache || {};
};

export const getDesignationBooks = ({ page = 0, designation_id }) => store => {
    const designationCache = getDesignationCache(designation_id)(store);

    return designationCache[page] || [];
};

export const getDashboardBooks = store => {
    const designations = getDesignations(store);
    const designationIDs = Object.keys(designations);

    const dashboardBooks = designationIDs.map(designationID => {
        const designation = designations[designationID];

        const books = getDesignationBooks({ designation_id: designationID })(
            store,
        );

        return {
            designation,
            designationID,
            books,
        };
    });

    return dashboardBooks;
};

export const getLastPageIndex = designation_id => store => {
    const designationCache = getDesignationCache(designation_id)(store);

    return designationCache ? designationCache.lastPageIndex : null;
};

export const getBookByID = id => store => {
    const { index, cache } = store.booksCollection;

    const { designation_id, page, pageIndex } = index[id] || {};

    if (cache[designation_id]) {
        if (cache[designation_id][page]) {
            return cache[designation_id][page][pageIndex] || null;
        }
    }

    return null;
};

export const getSearchBooksPublishers = store =>
    store.booksCollection.Publishers;

export const getSearchBooksSeries = store => store.booksCollection.Series;
