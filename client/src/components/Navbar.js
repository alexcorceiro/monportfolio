import React from 'react';
import "./css/navbar.css";

function Navbar({ refs, activePage, setActivePage }) {
    const scrollToRef = (ref, page) => {
        window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
        setActivePage(page);
    };

    const navbarStyle = activePage === 'Home' ? { display: 'none' } : {};

    return (
        <div className='navbar' style={navbarStyle}>
            <ul className='nav-list'>
                <li className={`nav-list-item ${activePage === 'Home' ? 'active' : ''}`} onClick={() => scrollToRef(refs.homeRef, 'Home')}>Accueil</li>
                <li className={`nav-list-item ${activePage === 'Profile' ? 'active' : ''}`} onClick={() => scrollToRef(refs.profileRef, 'Profile')}>A propos</li>
                <li className={`nav-list-item ${activePage === 'Formation' ? 'active' : ''}`} onClick={() => scrollToRef(refs.formationRef, 'Formation')}>Formation</li>
                <li className={`nav-list-item ${activePage === 'Language' ? 'active' : ''}`} onClick={() => scrollToRef(refs.languageRef, 'Language')}>Langues</li>
                <li className={`nav-list-item ${activePage === 'Projet' ? 'active' : ''}`} onClick={() => scrollToRef(refs.projetRef, 'Projet')}>Projets</li>
                <li className={`nav-list-item ${activePage === 'Contact' ? 'active' : ''}`} onClick={() => scrollToRef(refs.contactRef, 'Contact')}>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;
