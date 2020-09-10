import {
    getDesignations,
    getSearchBooksSeries,
} from '../books/books.selectors';

const getFields = store => store.booksSearch.fields;
const getInput = store => store.booksSearch.input;
const getPublisherSearchedTerm = store =>
    store.booksSearch.PublisherSearchedTerm;

const getFilteredPublishers = store => store.booksSearch.filteredPublishers;

const getSearchSortBy = store => store.booksSearch.sortby;

const getselectedOptions = store => store.booksSearch.selectedOptions;

const getSubmitSelected = store => store.booksSearch.submitSelected;

const getSearchFilter = store => {
    const category = ['All', ...Object.values(getDesignations(store))];
    const field = Object.values(getFields(store));
    const series = ['All', ...Object.values(getSearchBooksSeries(store))];
    const filteredPublishers = [
        'All',
        ...Object.values(getFilteredPublishers(store)),
    ];

    const sortBy = Object.values(getSearchSortBy(store));

    return {
        'Search by': field,
        Category: category,
        Series: series,
        Publishers: filteredPublishers,
        'Sort by': sortBy,
    };
};

const getFilteredBooks = store => store.booksSearch.filteredBooks;
const getSearchLastIndex = store => {
    const FilteredBooks = getFilteredBooks(store);
    const { lastPageIndex } = FilteredBooks;
    return lastPageIndex;
};

const getShowTags = store => {
    const filteredValues = Object.values(getSubmitSelected(store));
    const result = filteredValues.some(
        item =>
            item.filter(value => value !== 'All' && value !== 'Alphabetical')
                .length > 0,
    );
    const tagsLength = filteredValues.reduce((acc, arr) => acc + arr.length, 0);

    return { result, tagsLength };
};

const getTagItems = showAllTags => store => {
    const tagsArray = [];
    const submitedFilterOption = getSubmitSelected(store);

    Object.keys(submitedFilterOption).forEach(category =>
        submitedFilterOption[category].forEach(value => {
            tagsArray.push({ category, value });
        }),
    );

    if (showAllTags) {
        return tagsArray;
    }

    return tagsArray.slice(0, 2);
};

const SEARCH_SELECTORS = {
    getFields,
    getInput,
    getSearchSortBy,
    getSearchFilter,
    getFilteredPublishers,
    getselectedOptions,
    getPublisherSearchedTerm,
    getSubmitSelected,
    getFilteredBooks,
    getSearchLastIndex,
    getShowTags,
    getTagItems,
};

export default SEARCH_SELECTORS;
