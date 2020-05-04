async function fetchJSONfromRoot(url) {
    const data = await fetch(`${process.env.REACT_APP_API_ROOT}/${url}`);
    const json = await data.json();

    return json;
}

async function fetchDesignations() {
    const designations = await fetchJSONfromRoot(`/book/designations`);
    return designations;
}

async function fetchAllBooks(limit = 531) {
    const books = await fetchJSONfromRoot(`/book?limit=${limit}`);
    return books;
}

const api = {
    fetchAllBooks,
    fetchDesignations,
};

export default api;
