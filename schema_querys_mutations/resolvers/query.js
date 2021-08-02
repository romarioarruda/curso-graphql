module.exports = {
    ola() {
        return 'Bom dia!!'
    },

    user() {
        const obj = {
            id: 1,
            name: 'ROmário',
            last_name: 'Arruda',
            email: 'email@gmail.com',
            role: 'Dev'
        }

        return obj
    },

    product() {
        const discount = 0.1
        const price = 1500
        const discountCalc = price * discount

        return {
            name: 'Notebook dell',
            price,
            discount,
            priceFinal: (price - discountCalc)
        }
    },

    arrayUsers(_, { id }) {
        const users = [
            {
                id: 1,
                name: 'ROmário',
                last_name: 'Arruda',
                email: 'email@gmail.com',
                role: 'Dev'
            },
            {
                id: 2,
                name: 'Joao',
                last_name: 'Silva',
                email: 'jao@gmail.com',
                role: 'sales'
            }
        ]

        const filterUser = users.filter(user => user.id === id)

        return filterUser || []
    }
}