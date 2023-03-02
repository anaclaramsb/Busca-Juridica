import React from 'react';
import styles from './SearchBar.module.css';
import image from '../../assets/images/computer.jpg';
import { useState } from 'react';

const SearchBar = ({isHome}) => {
  const [trRegion, setTrRegion] = useState('');
  const [code, setCode] = useState('');

console.log(isHome)

  const handleTrChange = (event) => {
    setTrRegion(event.target.value);
  };
  async function handleSubmit() {}
  return (
    <form onSubmit={handleSubmit} className={isHome ? styles.home_form : styles.header}>
      <select
        value={trRegion}
        onChange={handleTrChange}
        className={styles.select}
      >
        <option disabled={true} value=''>
          --Escolha um Tribunal Regional--
        </option>
        <option value='grapefruit'>Grapefruit</option>
        <option value='lime'>Lime</option>
        <option value='coconut'>Coconut</option>
        <option value='mango'>Mango</option>
      </select>
      <div className={styles.separator}>ou</div>
      <input
        type='text'
        placeholder='Digite o código do processo'
        onChange={(event) => setCode(event.target.value)}
        value={code}
        className={styles.input}
      />

      <button className={styles.button} type='submit'>
        Buscar
      </button>
    </form>
  );
};
export default SearchBar;
