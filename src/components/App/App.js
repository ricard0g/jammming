import styles from "./App.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import { useCallback, useState } from "react";
import { Spotify } from "../../util/Spotify";

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [login, setLogin] = useState(false);
	const [playlistTracks, setPlaylistTracks] = useState([])
	const [playlistName, setPlaylistName] = useState('New Playlist');

	const handleClick = useCallback(() => {
		Spotify.getAccessToken();
	}, [login])

	return (
		<div className={styles.App}>
			<header className={styles.header}>
				<h1 className={styles.title}>
					Ja<span className={styles.highlight}>mmm</span>ing
				</h1>
				<button onClick={handleClick} className={styles.loginButton}>Login</button>
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
