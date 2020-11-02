async function fetchFromServer(url, requestOptions) {
    const data = await fetch(
        `${process.env.REACT_APP_API_ROOT}${url}`,
        requestOptions,
    );
    return data;
}
export async function signInUser(auth_code) {
    auth_code = JSON.stringify(auth_code);

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: auth_code,
    };
    const response = await fetchFromServer(
        '/identity/oauth/authentication',
        requestOptions,
    );
    const tokens = await response.json().then();
    return tokens;
}

export async function checkSession(accessToken) {
    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${accessToken}`,
        },
    };
    const response = await fetchFromServer(
        'identity/session/info',
        requestOptions,
    );

    return response.status;
}
