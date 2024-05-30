import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Formation from './pages/Formation';
import Home from './pages/Home';
import Language from './pages/Language';
import Profile from './pages/Profile';
import Projet from './pages/Projet';

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

    return (
        <div className="App">
            <header className="App-header">
                <Navbar refs={{
                    homeRef, profileRef, formationRef, languageRef, projetRef, contactRef
                }} activePage={activePage} setActivePage={setActivePage}/>
            </header>
            <div ref={homeRef}>
                <Home nextPageRef={profileRef} setActivePage={setActivePage} />
            </div>
            <div ref={profileRef}><Profile/></div>
            <div ref={formationRef}><Formation/></div>
            <div ref={languageRef}><Language/></div>
            <div ref={projetRef}><Projet/></div>
            <div ref={contactRef}><Contact/></div>
        </div>
    );
}

export default App;
