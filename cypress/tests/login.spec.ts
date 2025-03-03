import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'

const loginPage = new LoginPage()
const homePage = new HomePage()

describe("RWA Tests", () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
  });

  describe('Login de sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
      loginPage.loginWithAnyUser(userData.userSucess.userName, userData.userSucess.password)
      homePage.checkHomePage()
    })
  })

  describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      loginPage.loginWithAnyUser(userData.userFail.userName, userData.userFail.password)
      loginPage. checkAccessInvalid()
    })

    describe('Login de usuário sem transação', () => {
      it('Deve fazer login com um usuário sem transação', () => {
        loginPage.loginWithAnyUser(userData.userNoTransaction.userName, userData.userNoTransaction.password)
        homePage.checkHomePage()
      })
    })
  })
})

  