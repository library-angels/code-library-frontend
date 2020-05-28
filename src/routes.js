export default {
    Dashboard: '/',
    Account: '/account',
    Category: '/designation/:designation_id',
    Logout: '/logout',
};

export const createLink = {
    toDesignation: designationID => `/designation/${designationID}?page=1`,
    toDesignationPage: ({ designationID, page }) =>
        `/designation/${designationID}?page=${page}`,
};
