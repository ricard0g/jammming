import { useCallback } from "react";
import styles from "./Track.module.css";
import spotifyIcon from "../../assets/Spotify_Logo_RGB_White.webp";

function Track(props) {
	const removeTrack = useCallback(
		(event) => {
			props.onRemove(props.track);
		},
		[props.onRemove, props.track]
	);

	const addTrack = useCallback(
		(event) => {
			props.onAdd(props.track);
		},
		[props.onAdd, props.track]
	);

	const renderAction = () => {
		if (props.isRemoval) {
			return (
				<button className={styles.removalButton} onClick={removeTrack}>
					-
				</button>
			);
		}
		return (
			<button className={styles.addButton} onClick={addTrack}>
				+
			</button>
		);
	};

	return (
		<div className={styles.trackContainer}>
			<div className={styles.trackContent}>
				<h3 className={styles.titleTrack}>{props.track.name}</h3>
				<p className={styles.trackInfo}>
					{props.track.artist} | {props.track.album}
				</p>
				{props.track.preview ? (
					<div className={styles.audioIconContainer}>
						<audio
							controls
							src={props.track.preview}
							className={styles.audioSample}
						></audio>
						<img src={spotifyIcon} alt="Spotify Icon" className={styles.icon} />
					</div>
				) : (
					<div className={styles.audioIconContainer}>
						<p className={styles.noPreview}>No Preview Available</p>
					</div>
				)}
			</div>
			{renderAction()}
		</div>
	);
}

export { Track };
