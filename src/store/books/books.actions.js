const REQUEST_DASHBOARD_IDS = 'BOOKS_REQUEST_DASHBOARD_IDS';
const RECEIVE_DASHBOARD_IDS = 'BOOKS_RECEIVE_DASHBOARD_IDS';
const REQUEST_ALL = 'BOOKS_REQUEST_ALL';
const RECEIVE_ALL = 'BOOKS_RECEIVE_ALL';

const requestDashboardIDs = () => ({
    type: REQUEST_DASHBOARD_IDS,
});

const receiveDashboardIDs = dashboardIDs => ({
    type: RECEIVE_DASHBOARD_IDS,
    payload: {
        dashboardIDs,
    },
});

const requestAll = () => ({
    type: REQUEST_ALL,
});

const receiveAll = books => ({
    type: RECEIVE_ALL,
    payload: {
        books,
    },
});

export const BOOKS_ACTIONS = {
    REQUEST_ALL,
    RECEIVE_ALL,
    REQUEST_DASHBOARD_IDS,
    RECEIVE_DASHBOARD_IDS,
};

export const BOOKS_ACTION_CREATORS = {
    requestDashboardIDs,
    receiveDashboardIDs,
    requestAll,
    receiveAll,
};
