import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './LawSuit.module.css';
import api from '../../api/api';
import logo404 from '../../assets/images/404.png';
import Movements from '../../components/Movements/Movements';
import LawSuitDetails from '../../components/LawSuitDetails/LawSuitDetails';
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../../utils'
const LawSuit = () => {
  const [lawSuit, setlawSuit] = useState({});
  const [error404, setError404] = useState(false);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const cnj = urlParams.get('cnj');
  const history = useNavigate()

  useEffect(() => {
    api
      .get('/lawsuits', {
        params: {
          cnj: cnj,
        },
      })
      .then((response) => setlawSuit(response.data))
      .catch((err) => {
        err.response.status === 404 && setError404(true);
      });
  }, [cnj, history]);

  return (
    <div>
      <Header />
      <div className={styles.content}>
        {lawSuit !== '' &&
      error404 ? (
        <>
          <h1>Não existe projeto com esse CNJ, por favor tente outro número</h1>
          <img src={logo404} alt='' className={styles.image} />
        </>
      ) : (
        <>
          <h1 className={styles.title}>Processo n. {lawSuit?.cnj}</h1>
          <p className={styles.date}>Distribuído em {formatDate(lawSuit?.date)}</p>
          <div className={styles.law_suit_content}>
            <Movements movements={lawSuit?.movements} />
            <LawSuitDetails lawSuit={lawSuit}/>
          </div>
        </>
      )}
      </div>
    </div>
  );
};
export default LawSuit;
