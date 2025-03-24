import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import HistoricalTransactionPage from '../pages/historicalTransactionPage'
import UserRegistrationPage from '../pages/userRegistrationPage'
import TransactionPage from '../pages/transactionPage'
import HomePage from '../pages/homePage'

const Chance = require('chance');

const chance = new Chance();
const userRegistrationPage = new UserRegistrationPage()
const loginPage = new LoginPage()
const historicalTransactionPage = new HistoricalTransactionPage()
const transactionPage = new TransactionPage()
const homePage = new HomePage()

describe("Testes histórico de transações", () => {

  describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSucess.userName, userData.userSucess.password)  
        transactionPage.transationSteps('Kristian Bradtke', 1, 'Transfer Test')
        transactionPage.checkSuccessTransitionAlert()
        });
  });
  
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
      loginPage.loginWithAnyUser(userData.userNoTransaction.userName, userData.userNoTransaction.password)
      
      if (window.location.href.includes('/signin')) {
        userRegistrationPage.fillUserRegistrationInfoNoTransaction()
        userRegistrationPage.saveForm()
        loginPage.loginWithAnyUser(userData.userNoTransaction.userName, userData.userNoTransaction.password)
        userRegistrationPage.fillAccountInfo()
        historicalTransactionPage.checkEmptyTransaction()
      } else {
        historicalTransactionPage.checkEmptyTransaction();
      }
    })
  })
})