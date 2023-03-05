import React from 'react';
import styles from './LawSuitDetails.module.css';

const LawSuitDetails = ({ lawSuit }) => {
  return (
    <div className={styles.details}>
      <h3 className={styles.title}>Detalhes do Processo</h3>
      <p>Autor: {lawSuit.author}</p>
      <p>Réu: {lawSuit.defendent}</p>
      <p>Região: {lawSuit.trregion}</p>
    </div>
  );
};
export default LawSuitDetails;
