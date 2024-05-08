import styles from './App.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1 className={styles.title}>Ja<span className={styles.highlight}>mmm</span>ing</h1>
        <button className={styles.loginButton}>Login</button>
      </header>
      <main className={styles.main}>
        <SearchBar />
        <SearchResults />
      </main>
    </div>
  );
}

export default App;
