function App() {
  const containerStyle = {
    maxWidth: '700px',
    margin: '40px auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#222',
    lineHeight: '1.6',
    padding: '0 20px',
  };

  const headerStyle = {
    color: '#007acc',
    borderBottom: '2px solid #007acc',
    paddingBottom: '8px',
  };

  const linkStyle = {
    color: '#007acc',
    textDecoration: 'none',
  };

  const listStyle = {
    paddingLeft: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Oi, eu sou o David</h1>
      <p>
        Full Stack Developer | Java • Python • JS • C# | QA | DevOps | Cloud | Infra | Segurança
      </p>

      <h2 style={headerStyle}>Projetos</h2>
      <ul style={listStyle}>
        <li><a style={linkStyle} href="https://github.com/bobwallan" target="_blank" rel="noreferrer">Meu GitHub</a></li>
        <li><a style={linkStyle} href="https://meusitepessoal.com" target="_blank" rel="noreferrer">Meu site pessoal</a></li>
      </ul>

      <h2 style={headerStyle}>Contato</h2>
      <p>Email: <a href="mailto:bobwallan2@gmail.com" style={linkStyle}>bobwallan2@gmail.com</a></p>
      <p>WhatsApp: <a href="https://wa.me/5527992567995" target="_blank" rel="noreferrer" style={linkStyle}>27992567995</a></p>
    </div>
  );
}

export default App;
