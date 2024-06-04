import userData from '../fixtures/userData.json'

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
  blankSpacePage: '.makeStyles-root-1',
  wrongFirstNameAlert: '#firstName-helper-text',
  wrongLastNameAlert: '#lastName-helper-text',
  wrongUserNameAlert: '#username-helper-text',
  wrongPasswordAlert: '#password-helper-text',
  wrongConfirmPasswordAlert: '#confirmPassword-helper-text',
}

  describe('Login de sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
      cy.visit('/')
      cy.get(selectorsList.userNameField).type(userData.userSucess.userName)
      cy.get(selectorsList.passwordField).type(userData.userSucess.password)
      cy.get(selectorsList.rememberMeButton).click()
      cy.get(selectorsList.loginSubmitButton).click()
      cy.location('pathname').should('equal', '/')
    })
  })

  describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      cy.visit('/')
      cy.get(selectorsList.userNameField).type(userData.userFail.userName)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.rememberMeButton).click()
      cy.get(selectorsList.loginSubmitButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
    });
  });

  describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      cy.visit('/')
      cy.get(selectorsList.userRegistrationButton).click()
      cy.get(selectorsList.firstNameRegistrationField).type(userData.userRegistration.firstName)
      cy.get(selectorsList.lastNameRegistrationField).type(userData.userRegistration.lastName)
      cy.get(selectorsList.userNameRegistrationField).type(userData.userRegistration.userName)
      cy.get(selectorsList.passwordRegistrationField).type(userData.userRegistration.password)
      cy.get(selectorsList.confirmPasswordRegistrationField).type(userData.userRegistration.confirmationPassword)
      cy.get(selectorsList.registrationSubmitButton).click()
      cy.location('pathname').should('equal', '/signin')
    });
  });

  describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
      cy.visit('/')
      cy.get(selectorsList.userRegistrationButton).click()
      cy.get(selectorsList.firstNameRegistrationField).click()
      cy.get(selectorsList.lastNameRegistrationField).click()
      cy.get(selectorsList.userNameRegistrationField).click()
      cy.get(selectorsList.passwordRegistrationField).click()
      cy.get(selectorsList.confirmPasswordRegistrationField).click()
      cy.get(selectorsList.blankSpacePage).click()
      cy.get(selectorsList.wrongFirstNameAlert)
      cy.get(selectorsList.wrongLastNameAlert)
      cy.get(selectorsList.wrongUserNameAlert)
      cy.get(selectorsList.wrongPasswordAlert)
      cy.get(selectorsList.wrongConfirmPasswordAlert)
    });
  });
})

  