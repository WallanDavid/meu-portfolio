import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/WallanDavid" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/wallan-p-895100137/" target="_blank" rel="noreferrer">LinkedIn</a>
    </footer>
  );
}

export default Footer;
