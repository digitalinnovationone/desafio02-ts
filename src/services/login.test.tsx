import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com o texto: Boas vindas, Alisson!', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Boas vindas, Alisson!')
    })
})