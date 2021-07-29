const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Object

    type User {
        id: ID!
        name: String!
        email: String!
        role: String
        salary: Float
    }

    type Query {
        ola: String
        user: User,
        product: Object
    }
`

const resolvers = {
 Query: {
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
    }
 }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(url)
})