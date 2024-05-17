const clientId = "c07458a609434421b54082ddfdf84b47"; // client ID from the app create within the Spotify API
const redirectUri = "http://localhost:3000/"; // This redirect is pre-production
let accessToken;

export const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken; // If access token is already available, return it.
		}

		const accesTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
		if (accesTokenMatch && expiresInMatch) {
			accessToken = accesTokenMatch[1];
			const expiresIn = Number(expiresInMatch[1]);
			window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
			window.history.pushState("Access Token", null, "/"); // This clear parameters to get new ones when access token expires.

			return accessToken;
		} else {
			const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
			window.location = accessUrl;
		}
	},
	checkAccessToken() {
		if (accessToken) {
			return accessToken;
		}

		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in=([^#]*)/);

		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1];
			const expiresIn = Number(expiresInMatch[1]);
			console.log(accessToken);
			console.log(expiresIn);
			window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
			window.history.pushState("Access Token", null, "/");

			console.log(accessToken);
			return accessToken;
		}
	},
	async search(term) {
		try {
			const response = await fetch(
				`https://api.spotify.com/v1/search?q=${term}&type=track`,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);

			if (response) {
				const jsonResponse = await response.json();

				if (!jsonResponse.tracks) {
					return [];
				}

				return jsonResponse.tracks.items.map((track) => ({
					id: track.id,
					name: track.name,
					artist: track.artists[0].name,
					album: track.album.name,
					uri: track.uri,
					preview: track.preview_url,
				}));
			}
		} catch (error) {
			console.log(error);
		}
	},
	async savePlaylist(name, trackUris) {
		try {
			if (!name || !trackUris.length) {
				return;
			}

			const headers = {
				Authorization: `Bearer ${accessToken}`,
			};

			const getUserProfile = await fetch(`https://api.spotify.com/v1/me`, {
				headers: headers,
			});

			if (getUserProfile) {
				const jsonUserProfile = await getUserProfile.json();
				const userId = jsonUserProfile.id;

				const createPlaylist = await fetch(
					`https://api.spotify.com/v1/users/${userId}/playlists`,
					{
						method: "POST",
						headers: headers,
						body: JSON.stringify({ name: name }),
					}
				);

				if (createPlaylist) {
					const jsonCreatePlaylistCall = await createPlaylist.json();
					const playlistId = jsonCreatePlaylistCall.id;

					const addTracksToPlaylist = await fetch(
						`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
						{
							method: "POST",
							headers: headers,
							body: JSON.stringify({ uris: trackUris }),
						}
					);

					return addTracksToPlaylist;
				};
			}
		} catch (error) {
			console.log(error);
		}
	},
};
