
export const login = (email: string): void => {
    if (!email || email.trim() === "") {
        alert("Por favor, informe o e-mail antes de continuar.");
        return;
    }

    alert(`Bem vindo, ${email}!`);
};