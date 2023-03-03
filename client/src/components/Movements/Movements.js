import React, { useEffect, useState } from 'react';
import styles from './Movements.module.css';
import api from '../../api/api';
import { formatDate } from '../../utils';

const Movements = ({movements}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Movimentações</div>
    {console.log(movements)}
      {!movements?.length || !movements ? (
        <div className={styles.movement}>
         <p> Não há movimentações para esse processo</p>
        </div>
      ) : 
        <>{
            movements?.map(
                (movement) => 
                (<div className={styles.movement}>
                    <span className={styles.span}>{formatDate(movement.date)}</span>
                    <p>{movement.description}</p>
                     </div>
                )
            )
        }</>
        
      }
    </div>
  );
};
export default Movements;
