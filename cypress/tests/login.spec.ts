import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'

const loginPage = new LoginPage()
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
})

  