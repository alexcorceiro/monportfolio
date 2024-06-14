import React, { useEffect, useState } from 'react';
import "./css/home.css";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiIndeed } from "react-icons/si";
import OctogonSphere from '../components/OctagonSphere';

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

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/AlexCorceiro-CV.pdf`;
    link.download = "AlexCorceiro-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='home'>
      <div className='home-container'>
        <div className='home-left'>
          <OctogonSphere className='octogon-sphere' />
          <div className='home-left-content'>
            <div className='home-left-title'>
              <h2 className='home-title'>Alex Corceiro</h2>
              <span className='home-subtext'>{typingText}</span>
            </div>
            <div className='home-left-bottom'>
              <button onClick={downloadCV} className='home-btn'>
                <DownloadIcon /> mon CV
              </button>
              <ul className='home-list'>
                <li className='home-item'>
                  <a href="https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-menu-jobsearch--indeedmobile">
                    <SiIndeed />
                  </a>
                </li>
                <li className='home-item'>
                  <a href="https://www.linkedin.com/in/alex-corceiro-a423aa20b/">
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='home-right'>
          <img src={`${process.env.PUBLIC_URL}/asset/profile.png`} alt='Profile' className='home-image' />
        </div>
      </div>
    </div>
  );
}

export default Home;
