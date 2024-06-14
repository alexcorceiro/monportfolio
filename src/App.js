import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Formation from './pages/Formation';
import Home from './pages/Home';
import Language from './pages/Language';
import Profile from './pages/Profile';
import Projet from './pages/Projet';
import { motion } from 'framer-motion';

function App() {
    const homeRef = useRef(null);
    const profileRef = useRef(null);
    const formationRef = useRef(null);
    const languageRef = useRef(null);
    const projetRef = useRef(null);
    const contactRef = useRef(null);
    const [activePage, setActivePage] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            const positions = [
                { page: 'Home', ref: homeRef },
                { page: 'Profile', ref: profileRef },
                { page: 'Formation', ref: formationRef },
                { page: 'Language', ref: languageRef },
                { page: 'Projet', ref: projetRef },
                { page: 'Contact', ref: contactRef }
            ];
            const scrolled = window.scrollY + window.innerHeight / 2; // Point de détection à mi-chemin dans la fenêtre
            for (const pos of positions) {
                if (pos.ref.current) {
                    const top = pos.ref.current.offsetTop;
                    const height = pos.ref.current.offsetHeight;
                    if (scrolled >= top && scrolled < top + height) {
                        setActivePage(pos.page);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const variants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.8 } }
    };

    return (
        <div className="App">
            <header className="App-header">
                <Navbar
                    refs={{
                        homeRef, profileRef, formationRef, languageRef, projetRef, contactRef
                    }}
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
            </header>
            <section ref={homeRef}>
                <motion.div
                    key="Home"
                    variants={variants}
                    initial="initial"
                    animate={activePage === 'Home' ? 'animate' : 'exit'}
                    exit="exit"
                >
                    <Home nextPageRef={profileRef} setActivePage={setActivePage} />
                </motion.div>
            </section>
            <section ref={profileRef}>
                <motion.div
                    key="Profile"
                    variants={variants}
                    initial="initial"
                    animate={activePage === 'Profile' ? 'animate' : 'exit'}
                    exit="exit"
                >
                    <Profile />
                </motion.div>
            </section>
            <section ref={formationRef}>
                <motion.div
                    key="Formation"
                    variants={variants}
                    initial="initial"
                    animate={activePage === 'Formation' ? 'animate' : 'exit'}
                    exit="exit"
                >
                    <Formation />
                </motion.div>
            </section>
            <section ref={languageRef}>
                <motion.div
                    key="Language"
                    variants={variants}
                    initial="initial"
                    animate={activePage === 'Language' ? 'animate' : 'exit'}
                    exit="exit"
                >
                    <Language />
                </motion.div>
            </section>
            <section ref={projetRef}>
                <motion.div
                    key="Projet"
                    variants={variants}
                    initial="initial"
                    animate={activePage === 'Projet' ? 'animate' : 'exit'}
                    exit="exit"
                >
                    <Projet />
                </motion.div>
            </section>
            <section ref={contactRef}>
                <motion.div
                    key="Contact"
                    variants={variants}
                    initial="initial"
                    animate={activePage === 'Contact' ? 'animate' : 'exit'}
                    exit="exit"
                >
                    <Contact />
                </motion.div>
            </section>
        </div>
    );
}

export default App;
