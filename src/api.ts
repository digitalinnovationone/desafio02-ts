const conta = {
    email: 'eduardo@gmail.com',
    password: '123456',
    name: 'Eduardo Bispo',
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})