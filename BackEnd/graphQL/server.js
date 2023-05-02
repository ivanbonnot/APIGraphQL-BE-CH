const { ApolloServer } = require('@apollo/server')
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers/index')

const server = new ApolloServer ({
    typeDefs,
    resolvers,
});

module.exports = server