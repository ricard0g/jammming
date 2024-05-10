import { useCallback, useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const [term, setTerm] = useState('');

    const handleClick = useCallback(() => {
        if (!props.login) {
            alert('Make sure to log into your Spotify Account first!');
        }
        props.onSearch(term);
    }, [props.onSearch, term]);

    const handleChange = useCallback((e) =>{
        setTerm(e.target.value);
    }, []);

    return (
        <div className={styles.searchBarContainer}>
            <h2 className={styles.searchSaveEnjoy}><span className={styles.spanSubTitle}>SEARCH</span>, <span className={styles.spanSubTitle}>SAVE</span>, <span className={styles.spanSubTitle}>ENJOY!</span></h2>
            <input type='text' className={styles.searchInput} placeholder='Search any song...' onChange={handleChange}/>
            <button type='submit' className={styles.searchButton} onClick={handleClick}>Search</button>
        </div>
    )
}

export {SearchBar};