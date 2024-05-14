import { useCallback } from "react";
import styles from "./Playlist.module.css";
import { Tracklist } from "../Tracklist/Tracklist";

function Playlist(props) {
	const handleNameChange = useCallback(
		(event) => {
			props.onNameChange(event.target.value);
		},
		[props.onNameChange]
	);

	return (
		<div className={styles.playlistContainer}>
			<input
				type="text"
				className={styles.playlistName}
				placeholder="New Playlist"
				onChange={handleNameChange}
			/>
            <Tracklist 
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
			<button
				type="submit"
				className={styles.savePlaylistButton}
				onClick={props.onSave}
			>
				SAVE PLAYLIST
			</button>
		</div>
	);
}

export { Playlist };
