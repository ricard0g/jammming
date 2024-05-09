import styles from "./App.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

function App() {
	return (
		<div className={styles.App}>
			<header className={styles.header}>
				<h1 className={styles.title}>
					Ja<span className={styles.highlight}>mmm</span>ing
				</h1>
				<button className={styles.loginButton}>Login</button>
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
