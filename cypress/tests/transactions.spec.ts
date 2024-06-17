import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import TransactionPage from '../pages/transactionPage'

const loginPage = new LoginPage()
const transactionPage = new TransactionPage()

function accountBalance() {
  return cy.get('[data-test="sidenav-user-balance"]').then(($balance) => {
      const accountBalance = parseFloat($balance.text().replace(/[^0-9.-]+/g,""));
      const updatedBalance = accountBalance * 0.1;
      return parseFloat(updatedBalance.toFixed(2));
  });
}

function setAccountBalance() {
  return cy.get('[data-test="sidenav-user-balance"]').then(($balance) => {
      const accountBalance = parseFloat($balance.text().replace(/[^0-9.-]+/g,""));
      const updatedBalance = accountBalance * 1.1;
      return parseFloat(updatedBalance.toFixed(2));
  });
}

describe("RWA Tests", () => {
  
  beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.userName, userData.userSucess.password)
  });

  describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
      accountBalance().then((parcialBalance) => {
        transactionPage.transationSteps('Kristian Bradtke', parcialBalance, 'Transfer Test')
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