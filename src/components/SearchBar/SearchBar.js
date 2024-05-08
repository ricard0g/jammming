import styles from './SearchBar.module.css';

function SearchBar(props) {
    return (
        <div className={styles.searchBarContainer}>
            <h2 className={styles.searchSaveEnjoy}><span className={styles.spanSubTitle}>SEARCH</span>, <span className={styles.spanSubTitle}>SAVE</span>, <span className={styles.spanSubTitle}>ENJOY!</span></h2>
            <input type='text' className={styles.searchInput} placeholder='Search any song...'/>
            <button type='submit' className={styles.searchButton}>Search</button>
        </div>
    )
}

export {SearchBar};