import styles from "./App.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import { useCallback, useEffect, useState } from "react";
import { Spotify } from "../../util/Spotify";

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [login, setLogin] = useState(false);
	const [playlistTracks, setPlaylistTracks] = useState([]);
	const [playlistName, setPlaylistName] = useState("New Playlist");

	useEffect(() => {
		const accessToken = Spotify.checkAccessToken();
		console.log(accessToken);
		if (accessToken) {
			setLogin(true);
		} else {
			setLogin(false);
		}
		console.log(login);
	}, []);

	const handleClick = useCallback(() => {
		if (!login) {
			Spotify.getAccessToken();
		} else {
			console.log(`You're Already Logged In`);
		}
	}, []);

	const search = useCallback((term) => {
		Spotify.search(term).then(setSearchResults);
	}, []);

	const addTrack = useCallback(
		(track) => {
			if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
				return;

			setPlaylistTracks((prevPlaylistTracks) => [...prevPlaylistTracks, track]);
		},
		[playlistTracks]
	);

	const removeTrack = useCallback((track) => {
		setPlaylistTracks((savedTracks) => {
			savedTracks.filter((savedTrack) => savedTrack.id !== track.id);
		});
	}, []);

	const updatePlaylistName = useCallback((name) => {
		setPlaylistName(name);
	}, []);

	const savePlaylist = useCallback(() => {
		const trackUris = playlistTracks.map((track) => track.uri);
		Spotify.savePlaylist(playlistName, trackUris).then(() => {
			setPlaylistName("New Playlist");
			setPlaylistTracks([]);
		});
	}, [playlistName, playlistTracks]);

	return (
		<div className={styles.App}>
			<header className={styles.header}>
				<h1 className={styles.title}>
					Ja<span className={styles.highlight}>mmm</span>ing
				</h1>
				<button
					onClick={handleClick}
					className={login ? styles.logOutButton : styles.loginButton}
				>
					{login ? "Logged In" : "Login"}
				</button>
			</header>
			<main className={styles.main}>
				<SearchBar login={login} onSearch={search} />
				<section className={styles.tablesContainer}>
					<SearchResults searchResults={searchResults} onAdd={addTrack} />
					<Playlist
						playlistTracks={playlistTracks}
						playlistName={playlistName}
						onRemove={removeTrack}
						onNameChange={updatePlaylistName}
						onSave={savePlaylist}
					/>
				</section>
			</main>
		</div>
	);
}

export default App;
