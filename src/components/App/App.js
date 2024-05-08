import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1 className={styles.title}>Ja<span className={styles.highlight}>mmm</span>ing</h1>
        <button className={styles.loginButton}>Login</button>
      </header>
      <div className="App">
      </div>
    </div>
  );
}

export default App;
