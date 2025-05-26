import React from 'react';
import Footer from './Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Oi, eu sou o David</h1>
      <p className={styles.subtitle}>
        Full Stack Developer | Java • Python • JS • C# | QA | DevOps | Cloud | Infra | Segurança
      </p>

      <h2 className={styles.header}>Projetos</h2>
      <ul className={styles.list}>
        <li><a className={styles.link} href="https://github.com/bobwallan" target="_blank" rel="noreferrer">Meu GitHub</a></li>
        <li><a className={styles.link} href="https://meusitepessoal.com" target="_blank" rel="noreferrer">Meu site pessoal</a></li>
      </ul>

      <h2 className={styles.header}>Contato</h2>
      <p>Email: <a className={styles.link} href="mailto:bobwallan2@gmail.com">bobwallan2@gmail.com</a></p>
      <p>WhatsApp: <a className={styles.link} href="https://wa.me/5527992567995" target="_blank" rel="noreferrer">27992567995</a></p>

      <Footer />
    </div>
  );
}

export default App;
