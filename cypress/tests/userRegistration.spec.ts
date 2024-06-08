import LoginPage from '../pages/loginPage'
import UserRegistrationPage from '../pages/userRegistrationPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const userRegistrationPage = new UserRegistrationPage()

describe("RWA Tests", () => {

  describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      loginPage.accessLoginPage()
      userRegistrationPage.fillUserRegistrationInfo(chance.first(), chance.last(), chance.string(), '1234', '1234')
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

  