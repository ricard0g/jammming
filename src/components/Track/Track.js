import { useCallback } from "react";
import styles from "./Track.module.css";

function Track(props) {
	const removeTrack = useCallback(
		(e) => {
			props.onRemove(props.track);
		},
		[props.onRemove, props.track]
	);

	const addTrack = useCallback(
		(e) => {
			props.onAdd(props.track);
		},
		[props.onAdd, props.track]
	);

    const renderAction = () => {
        if(props.isRemoval){
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
        )
    }

	return (
		<div className={styles.trackContainer}>
			<div className={styles.trackContent}>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
		</div>
	);
}

export { Track };
