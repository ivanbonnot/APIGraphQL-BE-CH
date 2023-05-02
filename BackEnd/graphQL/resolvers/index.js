const { productQueries } = require('./product/queries')
const { productMutation } = require('./product/mutations')

module.exports.resolvers = {
    Query: {
        ...productQueries,
    },

    Mutation: {
        ...productMutation,
    },
};