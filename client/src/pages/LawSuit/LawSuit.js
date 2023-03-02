import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './LawSuit.module.css';

const LawSuit = () => {
return(
        <div>
            <div className={styles.header}>
                <SearchBar isHome={false} />

            </div>
            <h1>LawSuit</h1>
        </div>
    );
}
export default LawSuit;