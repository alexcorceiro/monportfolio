import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';  // Import de Framer Motion
import "./css/home.css";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiIndeed } from "react-icons/si";
import OctogonSphere from '../components/OctagonSphere';
import { IconButton } from '@mui/material';

// Hook personnalisé pour l'effet de frappe
function useTypingEffect(texts, speed = 150, pause = 1000) {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % texts.length;
      const fullText = texts[current];

      setCurrentText(isDeleting 
        ? fullText.substring(0, currentText.length - 1) 
        : fullText.substring(0, currentText.length + 1));

      setTypingSpeed(isDeleting ? speed / 2 : speed);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, texts, typingSpeed, speed, pause]);

  return currentText;
}

function Home({ nextPageRef, setActivePage }) {
  const roles = ['Développeur Full Stack Junior', 'Développeur backend', 'Développeur frontend'];
  const typingText = useTypingEffect(roles);

  const openCV = () => {
    const url = `${process.env.PUBLIC_URL}/alexcorceiro_cv.pdf`;
    window.open(url, '_blank', 'noopener,noreferrer'); 
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut", delayChildren: 0.3, staggerChildren: 0.2 } },  
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeInOut" } },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
      transition: { duration: 0.3, yoyo: Infinity }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" } }
  };

  return (
    <div className='home'>
      <motion.div className='home-container' initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div className='home-left' initial="hidden" animate="visible" variants={containerVariants}>
          <OctogonSphere className='octogon-sphere' />
          <div className='home-left-content'>
            <motion.div className='home-left-title' variants={containerVariants}>
              <h2 className='home-title'>Alex Corceiro</h2>
              <span className='home-subtext'>{typingText}</span>
            </motion.div>
            <motion.div className='home-left-bottom' variants={buttonVariants}>
              <motion.button onClick={openCV} className='home-btn' whileHover="hover" variants={buttonVariants}>
                <DownloadIcon style={{ fontSize: '2rem', margin: "0.5rem" }}/> mon CV
              </motion.button>
              <ul className='home-list'>
                <motion.li className='home-item' variants={iconVariants} whileHover="hover">
                  <IconButton 
                    component="a" 
                    href="https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-menu-jobsearch--indeedmobile"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Indeed Profile"
                  >
                    <SiIndeed style={{ fontSize: '3rem', color: '#003A9B' }} />
                  </IconButton>
                </motion.li>

                <motion.li className='home-item' variants={iconVariants} whileHover="hover">
                  <IconButton 
                    component="a" 
                    href="https://www.linkedin.com/in/alex-corceiro-a423aa20b/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedInIcon style={{ fontSize: '3rem', color: '#0A66C2' }} />
                  </IconButton>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
        <motion.div className='home-right' variants={imageVariants}>
          <img src={`${process.env.PUBLIC_URL}/asset/profile.png`} alt='Profile' className='home-image' />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
