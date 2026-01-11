// login.test.ts
import { login } from "./login";

describe("login", () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;

    beforeEach(() => {
        mockAlert.mockClear();
    });

    it("Deve exibir um alert de erro se o email estiver vazio", () => {
        login("");
        expect(mockAlert).toHaveBeenCalledWith("Por favor, informe o e-mail antes de continuar.");
    });

    it("Deve exibir um alert com boas vindas e o email", () => {
        login("teste@dio.com");
        expect(mockAlert).toHaveBeenCalledWith("Bem vinda, teste@dio.com!");
    });
});