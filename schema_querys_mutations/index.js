const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers/index')

const server = new ApolloServer({
    typeDefs: importSchema('./schemas/index.graphql'),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(url)
})