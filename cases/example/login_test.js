import account from '../../steps/account';

// пример теста
describe('test id', () => {
  // используйте beforeEach хук для вызова account.auth(),
  // если вы тестируете НЕ авторизацию

  it('Авторизоваться на странице', () => {
    account.open('http://tripway.ru.com/signin/');
    account.login();
  });
});
