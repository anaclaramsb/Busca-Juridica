import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './TrRegion.module.css';

const TrRegion = () => {
  return (
    <div>
      <div className={styles.header}>
        <SearchBar isHome={false} />
      </div>
      <div className={styles.content}>
      <h1>TrRegion</h1>
      <div className={styles.law_suit}>
        <h2>LawSuit</h2>
        <p>Data de início</p>
      </div>
      <div className={styles.law_suit}>
        <h2>LawSuit1</h2>
        <p>Data de início</p>
      </div>
      <div className={styles.law_suit}>
        <h2>LawSuit2</h2>
        <p>Data de início</p>
      </div>
      <div className={styles.law_suit}>
        <h2>LawSuit3</h2>
        <p>Data de início</p>
      </div>
      </div>
    </div>
  );
};
export default TrRegion;
