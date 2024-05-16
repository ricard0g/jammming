import styles from "./Tracklist.module.css";
import { Track } from "../Track/Track";

function Tracklist(props) {
	return (
		<div className={styles.trackListContainer}>
			{props.tracks.map((track) => {
				return (
					<Track
						track={track}
						key={track.id}
						onAdd={props.onAdd}
						onRemove={props.onRemove}
						isRemoval={props.isRemoval}
					/>
				);
			})}
		</div>
	);
}

export { Tracklist };
