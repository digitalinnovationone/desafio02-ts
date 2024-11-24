import { login } from "./login"

describe('login', ()=>{
    const mockLogin = jest.fn()
    window.alert = mockLogin
    it('Deve disparar um alert escrito "Bem-vindo"', ()=>{
        login()
        expect(mockLogin).toHaveBeenCalledWith('Seja muito bem-vindo ao Dio Bank')
    })
})