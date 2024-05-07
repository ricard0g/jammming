const clientId = 'c07458a609434421b54082ddfdf84b47' // client ID from the app create within the Spotify API
const redirectUri = 'http://localhost:3000/' // This redirect is pre-production
let accessToken;

const Spotify = {
    getAccessToken() {
        if(accessToken){
            return accessToken; // If access token is already available, return it.
        }

        const accesTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if(accesTokenMatch && expiresInMatch){
            accessToken = accesTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000); 
            window.history.pushState('Access Token', null, '/'); // This clear parameters to get new ones when access token expires.

            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },
}