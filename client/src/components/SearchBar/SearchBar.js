import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { validateCnjCode } from './utils';

const SearchBar = ({ isHome }) => {
  const [trRegion, setTrRegion] = useState('');
  const [code, setCode] = useState('');
  const [trRegions, setTrRegions] = useState([]);
  const [selectIsBeeingUsed, setSelectIsBeeingUsed] = useState(false);
  const [inputIsBeeingUsed, setInputIsBeeingUsed] = useState(false);
  const [formEmptyError, setFormEmptyError] = useState(false);
  const [cnjIsInvalid, setCnjIsInvalid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    api.get('/trregions').then((response) => setTrRegions(response.data));
  }, []);

  const handleTrChange = (event) => {
    setTrRegion(event.target.value);
    setFormEmptyError(false);
    event.target.value !== 'default'
      ? setSelectIsBeeingUsed(true)
      : setSelectIsBeeingUsed(false);
  };

  const handleCnjChange = (event) => {
    setCode(event);
    setFormEmptyError(false);
    console.log(event);
    setInputIsBeeingUsed(!!event);
    if(validateCnjCode(event)) setCnjIsInvalid(false);
    else setCnjIsInvalid(!!event)
  };

  const cleanForm = () => {
    setCode('');
    setTrRegion('');
    setSelectIsBeeingUsed(false);
    setInputIsBeeingUsed(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (selectIsBeeingUsed) {
      navigate(`/trregion/?tr=${trRegion}`);
      cleanForm();
    } else if (inputIsBeeingUsed) {
      if (!cnjIsInvalid) {
        navigate(`/lawsuit/?cnj=${code}`);
        cleanForm();
      }
    } else setFormEmptyError(true);
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={isHome ? styles.home_form : styles.header}
    >
      <div className={styles.inputContainer}>
        <input
          type='text'
          placeholder='Digite o código do processo'
          onChange={(event) => handleCnjChange(event.target.value)}
          value={code}
          className={styles.input}
          disabled={selectIsBeeingUsed}
        />
        {cnjIsInvalid && (
          <div className={isHome ? styles.error : styles.error_header}>
            Por favor digite um código com o formato NNNNNNN-NN.NNNN.N.NN.NNNN
          </div>
        )}
      </div>
      <div className={styles.separator}>ou</div>
      <select
        value={trRegion}
        onChange={handleTrChange}
        className={styles.select}
        disabled={inputIsBeeingUsed}
      >
        <option value='default'>--Escolha um Tribunal Regional--</option>
        {trRegions.map((region) => (
          <option value={region}>{region}</option>
        ))}
      </select>
      <div className={styles.buttonContainer}>
        <button className={styles.button} type='submit'>
          Buscar
        </button>
        {formEmptyError && (
          <div className={isHome ? styles.error : styles.error_header}>
            Preencha pelo menos um dos campos
          </div>
        )}
      </div>
    </form>
  );
};
export default SearchBar;
