describe("RWA Tests", () => {

const selectorsList = {
  userNameField: "[data-test='signin-username']",
  passwordField: "[data-test='signin-password']",
  rememberMeButton: "[data-test='signin-remember-me']",
  loginSubmitButton: "[data-test='signin-submit']",
  wrongCredentialAlert: '[data-test="signin-error"]',
  userRegistrationButton: "[data-test='signup']",
  firstNameRegistrationField: "[data-test='signup-first-name']",
  lastNameRegistrationField: "[data-test='signup-last-name']",
  userNameRegistrationField: "[data-test='signup-username']",
  passwordRegistrationField: "[data-test='signup-password']",
  confirmPasswordRegistrationField: "[data-test='signup-confirmPassword']",
  registrationSubmitButton: "[data-test='signup-submit']",
  wrongFirstNameAlert: '#firstName-helper-text',
  wrongLastNameAlert: '#lastName-helper-text',
  wrongUserNameAlert: '#username-helper-text',
  wrongPasswordAlert: '#password-helper-text',
  wrongConfirmPasswordAlert: '#confirmPassword-helper-text',
}

  describe('Login de sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
      cy.visit('http://localhost:3000/')
      cy.get(selectorsList.userNameField).type('Heath93')
      cy.get(selectorsList.passwordField).type('s3cret')
      cy.get(selectorsList.rememberMeButton).click()
      cy.get(selectorsList.loginSubmitButton).click()
      cy.location('pathname').should('equal', '/')
    })
  })

  describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      cy.visit('http://localhost:3000/')
      cy.get(selectorsList.userNameField).type('FailUserName')
      cy.get(selectorsList.passwordField).type('fail')
      cy.get(selectorsList.rememberMeButton).click()
      cy.get(selectorsList.loginSubmitButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
    });
  });

  describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      cy.visit('http://localhost:3000/')
      cy.get(selectorsList.userRegistrationButton).click()
      cy.get(selectorsList.firstNameRegistrationField).type("FirstName")
      cy.get(selectorsList.lastNameRegistrationField).type("LastName")
      cy.get(selectorsList.userNameRegistrationField).type("UserName")
      cy.get(selectorsList.passwordRegistrationField).type(1234)
      cy.get(selectorsList.confirmPasswordRegistrationField).type(1234)
      cy.get(selectorsList.registrationSubmitButton).click()
      cy.location('pathname').should('equal', '/signin')
    });
  });

  describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
      cy.visit('http://localhost:3000/')
      cy.get(selectorsList.userRegistrationButton).click()
      cy.get(selectorsList.firstNameRegistrationField).click()
      cy.get(selectorsList.lastNameRegistrationField).click()
      cy.get(selectorsList.userNameRegistrationField).click()
      cy.get(selectorsList.passwordRegistrationField).click()
      cy.get(selectorsList.confirmPasswordRegistrationField).click()
      cy.get('.makeStyles-root-1').click()
      cy.get(selectorsList.wrongFirstNameAlert)
      cy.get(selectorsList.wrongLastNameAlert)
      cy.get(selectorsList.wrongUserNameAlert)
      cy.get(selectorsList.wrongPasswordAlert)
      cy.get(selectorsList.wrongConfirmPasswordAlert)
    });
  });
})

  