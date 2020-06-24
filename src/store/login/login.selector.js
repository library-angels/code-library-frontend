const getAccessToken = store => store.login.accessToken;
const getRefreshToken = store => store.login.refreshToken;

const LOGIN_SELECTORS = {
    getAccessToken,
    getRefreshToken,
};

export default LOGIN_SELECTORS;
