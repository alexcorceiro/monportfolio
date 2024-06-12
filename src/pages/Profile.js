import React from 'react';
import { useTheme } from '@mui/material';
import { SiReact, SiMongodb } from 'react-icons/si'; 
import { FaNodeJs, FaChrome } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { motion } from 'framer-motion';
import "./css/profile.css"
import Sphère from '../components/Sphère';

const Profile = () => {
  const theme = useTheme();

  const skills = [
    { name: "Frontend Developer", Icon: SiReact },
    { name: "Developer Web", Icon: FaChrome },
    { name: "Backend Developer", Icon: FaNodeJs },
    { name: "Full Stack Developer", Icon: DiVisualstudio }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
    hover: { scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <div className='profile'>
      <div className='profile-container'>
        <motion.h1 className='profile-title' initial="hidden" animate="visible" variants={textVariants}>
          A Propos de Moi
        </motion.h1>
        <div className='profile-header'>
          <motion.div className='profile-header-left' initial="hidden" animate="visible" variants={textVariants}>
            <p className='profile-text'>
              Passionné par la création de technologies qui améliorent de manière significative l'usage quotidien des utilisateurs, <br/>
              je suis spécialisé dans le développement Full Stack avec une forte compétence en JavaScript. <br/>
              Expert en frameworks tels que React et Express.js, et familier avec les services cloud AWS, <br/>
              je développe des solutions logicielles qui sont non seulement efficaces et performantes, mais aussi évolutives.
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
              >
                <skill.Icon className="skill-icon" />
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
