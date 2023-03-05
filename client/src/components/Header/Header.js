import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.search_bar}>
        <SearchBar isHome={false} />
      </div>
    </div>
  );
};
export default Header;
