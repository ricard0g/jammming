import styles from "./SearchResults.module.css";
import { Tracklist } from "../Tracklist/Tracklist";

function SearchResults(props) {
	return (
		<div className={styles.searchResultsContainer}>
			<h2 className={styles.resultsTitle}>Results</h2>
			<Tracklist
				tracks={props.searchResults}
				onAdd={props.onAdd}
				isRemoval={props.isRemoval}
				onRemove={props.onRemove}
			/>
		</div>
	);
}

export { SearchResults };
