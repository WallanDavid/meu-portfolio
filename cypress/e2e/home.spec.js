describe('Meu Portfolio', () => {
  it('Deve carregar a página principal e mostrar meu nome', () => {
    cy.visit('/') // acessa a home do seu app React
    cy.contains('Seu Nome Aqui') // troca pelo seu nome real
  })

  it('Deve listar minhas skills', () => {
    cy.contains('Java')
    cy.contains('Python')
    cy.contains('JavaScript')
    cy.contains('C#')
    cy.contains('DevOps')
    cy.contains('QA')
    cy.contains('Azure')
    cy.contains('AWS')
    // adiciona o que quiser validar
  })

  it('Deve mostrar meus projetos', () => {
    cy.contains('Projeto 1')
    cy.contains('Projeto 2')
    // trocar pelos nomes reais dos seus projetos
  })
})
