import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import UserRegistrationPage from '../pages/userRegistrationPage'
import HomePage from '../pages/homePage'

const loginPage = new LoginPage()
const userRegistrationPage = new UserRegistrationPage()
const homePage = new HomePage()

describe("RWA Tests", () => {

  describe('Login de sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSucess.userName, userData.userSucess.password)
      homePage.checkHomePage()
    })
  })

  describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userFail.userName, userData.userFail.password)
      loginPage. checkAccessInvalid()
    });
  });

  describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      loginPage.accessLoginPage()
      userRegistrationPage.fillUserRegistrationInfo(userData.userRegistration.firstName, userData.userRegistration.lastName, userData.userRegistration.userName, userData.userRegistration.password, userData.userRegistration.confirmationPassword)
      userRegistrationPage.saveForm()
    });
  });

  describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
      loginPage.accessLoginPage()
      userRegistrationPage.emptyUserRegistrationInfo()
      userRegistrationPage.checkUserRegistrationFail()
    });
  });
})

  