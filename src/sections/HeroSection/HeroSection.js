// src/sections/HeroSection/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';

// Use the existing image placed in public/assets so the browser loads the real image file.
const HERO_IMAGE = '/assets/hero-background.png';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.hero}>
            <img
                src={HERO_IMAGE}
                alt="Portfolio Hero Background"
                className={styles.heroImage}
                loading="lazy"
            />
            <motion.div 
                className={styles.heroContent}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1 className={styles.title}>DEBASHIS MAHANTA</h1>
                <motion.p 
                    className={styles.tagline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Hi, I’m Debashis Mahanta
A Full Stack MERN Developer & Data Analyst passionate about building smart, scalable, and meaningful digital solutions.
Turning data into insights & ideas into code.
                </motion.p>
                <button
                    className={styles.ctaButton}
                    type="button"
                    onClick={() => navigate('/contact')}
                >
                    Let's connect
                </button>
            </motion.div>
        </section>
    );
};

export default HeroSection;