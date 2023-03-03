import React from 'react';
import styles from './Home.module.css';
import image from '../../assets/images/computer.jpg';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <img src={image} alt='' className={styles.image} />
        <div className={styles.content}>
          <h1 className={styles.title}>
            Seu processo à distância de um{' '}
            <span className={styles.span}>clique</span>
          </h1>
          <p className={styles.description}>
            Selecione um tribunal para listar os processos ou busque pelo número
            unificado de um processo específico.
          </p>
          <SearchBar isHome />
        </div>
      </div>
    </div>
  );
};
export default Home;
