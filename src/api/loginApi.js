async function fetchFromServer(auth_code, url) {
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: auth_code,
    };
    const data = await fetch(
        `${process.env.REACT_APP_API_ROOT}/${url}`,
        requestOptions,
    );
    return data;
}
export async function signInUser(auth_code) {
    auth_code = JSON.stringify(auth_code);
    const response = await fetchFromServer(
        auth_code,
        '/identity/oauth/authorization_code_exchange/',
    );
    const tokens = await response.json().then();
    return tokens;
}
