import React from 'react';
import { useTheme } from '@mui/material';
import { SiReact, SiMongodb } from 'react-icons/si'; 
import { FaNodeJs, FaChrome } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { motion } from 'framer-motion';
import "./css/profile.css";
import Sphère from '../components/Sphère';

const Profile = () => {
  const theme = useTheme();

  const skills = [
    { name: "Développeur Full Stack", Icon: DiVisualstudio },
    { name: "Développeur Web", Icon: FaChrome },
    { name: "Développeur Frontend", Icon: SiReact },
    { name: "Développeur Backend", Icon: FaNodeJs }
  ];


  const cardVariants = {
    hidden: { opacity: 0, rotateY: 90, scale: 0.5 },  
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      scale: 1, 
      transition: { type: 'spring', stiffness: 150, damping: 20 }  
    },
    hover: { 
      scale: 1.2, 
      rotateZ: 10,  
      boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.8)",  
      transition: { duration: 0.4 }  
    }
  };

  
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
          <div className='profile-header-right'>
            <Sphère/>
          </div>
        </div>
        <div className='profile-bottom'>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-card" 
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
                transition={{ delay: index * 0.3 }}  
              >
                <motion.div 
                  className="icon-wrapper"
                  whileHover={{ scale: 1.5, rotateZ: 15 }}  
                  transition={{ duration: 0.3 }}
                >
                  <skill.Icon className="skill-icon" />
                </motion.div>
                <div className="skill-name">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
