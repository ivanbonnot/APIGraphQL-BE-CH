const { ApolloServer } = require('@apollo/server')
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers/index')

module.exports.server = new ApolloServer ({
    typeDefs,
    resolvers,
});