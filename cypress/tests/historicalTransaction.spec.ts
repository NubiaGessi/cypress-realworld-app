import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import HistoricalTransactionPage from '../pages/historicalTransactionPage'
import UserRegistrationPage from '../pages/userRegistrationPage'

const userRegistrationPage = new UserRegistrationPage()
const loginPage = new LoginPage()
const historicalTransactionPage = new HistoricalTransactionPage()

describe("Testes histórico de transações", () => {
  
  describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSucess.userName, userData.userSucess.password)
        historicalTransactionPage.checkHistoricalTransactionSuccess()
       })
  })

  describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        loginPage.accessLoginPage()
        userRegistrationPage.fillUserRegistrationInfoNoTransaction()
        userRegistrationPage.saveForm()
        loginPage.loginWithAnyUser(userData.userNoTransaction.userName, userData.userNoTransaction.password)
        //userRegistrationPage.fillAccountInfo() "esse código deve rodar 1 vez por dia"
        historicalTransactionPage.checkEmptyTransaction()
    });
  });
})


