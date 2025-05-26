describe('Meu Portfólio', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // seu React rodando local
  });

  it('verifica o título da página', () => {
    cy.title().should('include', 'Meu Portfólio'); // ajuste conforme o título real da sua página
  });

  it('exibe o nome correto', () => {
    cy.contains('Oi, eu sou o David').should('be.visible');
  });

  it('mostra as skills principais', () => {
    cy.contains('Full Stack Developer').should('be.visible');
  });

  it('lista projetos importantes', () => {
    cy.contains('Meu GitHub').should('be.visible');
    cy.contains('Meu site pessoal').should('be.visible');
  });

  it('exibe contato com email e WhatsApp', () => {
    cy.contains('Email: bobwallan2@gmail.com').should('be.visible');
    cy.contains('WhatsApp: 27992567995').should('be.visible');
  });
});
