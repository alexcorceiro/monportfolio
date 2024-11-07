import React from 'react';
import { motion } from 'framer-motion';
import "./css/profile.css";
import Sphère from '../components/Sphère';

const Profile = () => {


  
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <div className='profile'>
      <div className='profile-container'>
        <motion.h1 className='profile-title' initial="hidden" animate="visible" variants={textVariants} style={{ fontSize: '4rem' }}>
          À propos de moi
        </motion.h1>
        <div className='profile-header'>
        <motion.div className='profile-header-left' initial="hidden" animate="visible" variants={textVariants}>
          <p className='profile-text'>
            Développeur Full Stack passionné avec une expertise en JavaScript et une solide expérience dans le développement de solutions logicielles innovantes. <br/>
            Compétent dans l'utilisation de frameworks modernes comme React pour le frontend et Express.js pour le backend, ainsi que dans l'intégration de services cloud tels qu'AWS. <br/>
            Mon objectif est de concevoir et de développer des applications performantes, évolutives et optimisées, adaptées aux besoins des utilisateurs finaux, tout en assurant une expérience utilisateur fluide et intuitive. <br/>
            Fort d'une approche axée sur les meilleures pratiques de développement et le travail collaboratif, je suis toujours prêt à relever de nouveaux défis techniques pour améliorer constamment mes compétences et offrir des solutions de haute qualité.
          </p>
        </motion.div>
          <div>
            <Sphère/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
