import React from 'react';
import Header from '../../components/Header/Header';

import styles from './TrRegion.module.css';

const TrRegion = () => {
  return (
    <div>
       <Header />
      <div className={styles.content}>
      <h1 className={styles.tr_region}>TrRegion</h1>
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
