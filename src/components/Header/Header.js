// src/components/Header/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    
    const getNavLinkClass = ({ isActive }) => isActive ? styles.active : '';

    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <NavLink to="/">DEBASHIS's Portfolio</NavLink> 
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><NavLink to="/projects" className={getNavLinkClass}>Projects</NavLink></li>
                        <li><NavLink to="/about" className={getNavLinkClass}>About</NavLink></li>
                        <li><NavLink to="/skills" className={getNavLinkClass}>Skills</NavLink></li>
                        <li><NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;