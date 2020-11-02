/* eslint-disable max-len */

export function loadGoogleApi(identifier) {
    const params = {
        client_id: identifier,
        response_type: 'code',
        include_granted_scopes: 'true',
        access_type: 'offline',
        promt: 'consent',
        hd: 'code.berlin',
    };
    window.gapi.load('auth2', () => {
        if (!window.gapi.auth2.getAuthInstance()) {
            window.gapi.auth2.init(params);
        }
    });
}

export async function requestIdentifier() {
    const data = await fetch(
        'https://api.dev.library.code.berlin/identity/oauth/client_identifier',
        {
            method: 'GET',
            mode: 'cors',
        },
    );
    const response = data.json().then();

    return response;
}

export async function initializeGoogleAuth2() {
    const auth2 = await window.gapi.auth2.getAuthInstance();
    const auth_code = await auth2.grantOfflineAccess().then();
    return auth_code;
}
