export default {
    Dashboard: '/',
    Account: '/account',
    Category: '/category/:department',
    Logout: '/logout',
};

export const createLinks = {
    toCategoryDepartment: department => `/category/${department}`,
};
