export default {
    Dashboard: '/',
    Account: '/account',
    Category: '/designation/:designation_id',
    Logout: '/logout',
    Login: '/login',
    SearchPage: '/search',
};

export const createLink = {
    toDesignation: designationID => `/designation/${designationID}?page=1`,
    toDesignationPage: ({ designationID, page }) =>
        `/designation/${designationID}?page=${page}`,
    toSearchPage: ({ page }) => `/search?page=${page}`,
};
