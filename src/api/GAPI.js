export function loadGoogleApi() {
    const params = {
        client_id:
            '55145421475-5v3b8519i457v6jock86v4t4letfrsju.apps.googleusercontent.com',

        response_type: 'code',
        access_type: 'offline',
        promt: 'consent',
    };
    window.gapi.load('auth2', () => {
        if (!window.gapi.auth2.getAuthInstance()) {
            window.gapi.auth2.init(params);
        }
    });
}

export async function initializeGoogleAuth2() {
    const auth2 = await window.gapi.auth2.getAuthInstance();
    const auth_code = await auth2.grantOfflineAccess().then();
    return auth_code;
}
