import styles from "./App.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import { useCallback, useEffect, useState } from "react";
import { Spotify } from "../../util/Spotify";

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [login, setLogin] = useState(false);
	const [playlistTracks, setPlaylistTracks] = useState([])
	const [playlistName, setPlaylistName] = useState('New Playlist');

	useEffect(() => {
		const accessToken = Spotify.checkAccessToken();
		console.log( accessToken);
		if (accessToken){
			setLogin(true);
		} else {
			setLogin(false);
		}
		console.log(login);
	})

	const handleClick = useCallback(() => {
		if(!login){
			Spotify.getAccessToken();
		} else {
			console.log(`You're Already Logged In`);
		}
	}, [])

	return (
		<div className={styles.App}>
			<header className={styles.header}>
				<h1 className={styles.title}>
					Ja<span className={styles.highlight}>mmm</span>ing
				</h1>
				<button onClick={handleClick} className={login ? styles.logOutButton : styles.loginButton}>{login ? 'Logged In' : 'Login'}</button>
			</header>
			<main className={styles.main}>
				<SearchBar />
				<section className={styles.tablesContainer}>
					<SearchResults />
					<Playlist />
				</section>
			</main>
		</div>
	);
}

export default App;
