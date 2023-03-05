import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import api from '../../api/api';
import styles from './TrRegion.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils';

const TrRegion = () => {
  const [lawSuits, setlawSuits] = useState();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const tr = urlParams.get('tr');
  const history = useNavigate();

  useEffect(() => {
    api
      .get('/trregion', {
        params: {
          tr: tr,
        },
      })
      .then((response) => setlawSuits(response.data))
      .catch((err) => {
        err.response.status && console.log(err);
      });
  }, [tr, history]);

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.tr_region}>{tr}</h1>
        {lawSuits?.map((lawsuit) => (
          <div className={styles.law_suit} key={lawsuit.cnj}>
            <Link to={`/lawsuit/?cnj=${lawsuit.cnj}`} className={styles.link}>
              <h2>Processo n. {lawsuit.cnj}</h2>
              <p>{formatDate(lawsuit.date)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TrRegion;
