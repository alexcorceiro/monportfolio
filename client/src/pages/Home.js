import React from 'react';
import "./css/home.css";
import Sphère from '../components/Sphère';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Home({ nextPageRef, setActivePage }) {
  const scrollToNextPage = () => {
    if (nextPageRef && nextPageRef.current) {
      window.scrollTo({ top: nextPageRef.current.offsetTop, behavior: 'smooth' });
      setActivePage('Profile'); // Mettre à jour cette valeur en fonction de la page suivante
    }
  };

  return (
    <div className='home'>
      <div className='home-contaire'>
        <header className='home-header'>
          <p className='home-text1'>
            Bonjour, je m'appelle <br />
            <h1 className='home-title'>Alex Corceiro</h1>
          </p>
          <p className='home-text2'>
            Je suis un développeur passionné par les technologies web et les expériences utilisateur uniques.
          </p>
        </header>
        <div className='sphere-container'>
          <Sphère />
        </div>
        <button className='home-btn' onClick={scrollToNextPage}>
          <ArrowDownwardIcon />
        </button>
      </div>
    </div>
  );
}

export default Home;
