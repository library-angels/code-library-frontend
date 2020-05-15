/* eslint-disable max-len */
async function fetchJSONfromRoot(url) {
    const data = await fetch(`${process.env.REACT_APP_API_ROOT}/${url}`);
    if (data.status !== 200) {
        throw new Error(
            `Something went wrong while fetching on '${process.env.REACT_APP_API_ROOT}/${url}`,
        );
    }

    const json = await data.json();
    return json;
}

export async function fetchDesignations() {
    const designations = await fetchJSONfromRoot(`/book/designations`);

    return designations;
}

export async function fetchBooks(offset = 0, limit = 531) {
    const books = await fetchJSONfromRoot(
        `/book?offest=${offset}&limit=${limit}`,
    );

    return books;
}

export async function fetchDesignationBooks(
    offset = 0,
    limit = 20,
    designationID = 0,
) {
    const books = await fetchJSONfromRoot(
        `/book?designation_id=${designationID}&offest=${offset}&limit=${limit}`,
    );

    return books;
}
