import { login } from './login';

describe('login', () => {
  it('deve retornar uma mensagem de boas-vindas', () => {
    const result = login();

    expect(result).toBe('Login Successful!');
  });
});
