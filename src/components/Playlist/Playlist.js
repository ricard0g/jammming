import styles from './Playlist.module.css';

function Playlist(props) {
    return (
        <div className={styles.playlistContainer}>
            <input type='text' className={styles.playlistName} placeholder='New Playlist'/>
            {/* Here goes the tracks added */}
            <button type='submit' className={styles.savePlaylistButton}>SAVE PLAYLIST</button>
        </div>
    )
};

export {Playlist};