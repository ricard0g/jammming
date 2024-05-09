import styles from './SearchResults.module.css';

function SearchResults(props) {
    return (
        <div className={styles.searchResultsContainer}>
            <h2 className={styles.resultsTitle}>Results</h2>
        </div>
    )
}

export {SearchResults}