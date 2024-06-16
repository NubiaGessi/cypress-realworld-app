import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import TransactionPage from '../pages/transactionPage'

const loginPage = new LoginPage()
const transactionPage = new TransactionPage()

function accountBalance() {
  return cy.get('[data-test="sidenav-user-balance"]').then(($balance) => {
      const accountBalance = parseFloat($balance.text().replace(/[^0-9.-]+/g,""));
      return accountBalance;
  });
}

function setAccountBalance() {
  return cy.get('[data-test="sidenav-user-balance"]').then(($balance) => {
      const accountBalance = parseFloat($balance.text().replace(/[^0-9.-]+/g,""));
      return accountBalance * 1.1;
  });
}

describe("RWA Tests", () => {
  
  beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.userName, userData.userSucess.password)
  });

  describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
      accountBalance().then((accountBalance) => {
        transactionPage.transationSteps('Kristian Bradtke', accountBalance, 'Transfer Test')
      })
      transactionPage.checkSuccessTransitionAlert()
    });
  });

  describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
      setAccountBalance().then((amountGreaterThanBalance) => {
        transactionPage.transationSteps('Kristian Bradtke', amountGreaterThanBalance, 'Transfer Test')
      })
      transactionPage.checkDisabledSubmitButton()
    });
  });
});