describe('Login de sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-test='signin-username']").type('Heath93')
    cy.get("[data-test='signin-password']").type('s3cret')
    cy.get("[data-test='signin-remember-me']").click()
    cy.get("[data-test='signin-submit']").click()
    cy.location('pathname').should('equal', '/')
  })
})

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-test='signin-username']").type('FailUserName')
    cy.get("[data-test='signin-password']").type('fail')
    cy.get("[data-test='signin-remember-me']").click()
    cy.get("[data-test='signin-submit']").click()
    cy.get('[data-test="signin-error"]')   
  });
});

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-test='signup']").click()
    cy.get("[data-test='signup-first-name']").type("FirstName")
    cy.get("[data-test='signup-last-name']").type("LastName")
    cy.get("[data-test='signup-username']").type("UserName")
    cy.get("[data-test='signup-password']").type(1234)
    cy.get("[data-test='signup-confirmPassword']").type(1234)
    cy.get("[data-test='signup-submit']").click()
    cy.location('pathname').should('equal', '/signin')
  });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-test='signup']").click()
    cy.get("[data-test='signup-first-name']").click()
    cy.get("[data-test='signup-last-name']").click()
    cy.get("[data-test='signup-username']").click()
    cy.get("[data-test='signup-password']").click()
    cy.get("[data-test='signup-confirmPassword']").click()
    cy.get('.makeStyles-root-1').click()
    cy.get('#firstName-helper-text')
    cy.get('#lastName-helper-text')
    cy.get('#username-helper-text')
    cy.get('#password-helper-text')
    cy.get('#confirmPassword-helper-text')
  });
});

  