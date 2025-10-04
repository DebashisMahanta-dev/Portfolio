import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <p>© {new Date().getFullYear()} Debashis's Portfolio. All rights reserved.</p>
          <ul className={styles.social}>
            <li>
              <a href="https://instagram.com/deb69___" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                {/* Instagram SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5h.01" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/DebashisMahanta-dev" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                {/* GitHub SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0019 4.77 5.07 5.07 0 0018.91 1S17.73.65 15 2.48a13.38 13.38 0 00-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 004 4.77 5.44 5.44 0 002 9.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 007.5 19.13V23" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:debashisonu@gmail.com" aria-label="Email Debashis">
                {/* Mail SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 8l8.5 6L20 8" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
