
const { buildSchema } = require('graphql')

const schemaProduct = buildSchema(`
    type Product {
        timestamp: String!,
        title: String!, 
        thumbnail: String!,
        description: String,
        stock: Int,
        code: String,
        price: Int!
    }

    input ProductInput {
        timestamp: String!,
        title: String!, 
        thumbnail: String!,
        description: String,
        stock: Int,
        code: String,
        price: Int!
    }

    type Query {
        getAllProducts: [Product]!
        getProductById(id: ID!): Product!
    }

    type Mutation {
        addProduct(title: String!, description: String, code: String, thumbnail: String!, price: Int!, stock: Int): Product!
        updateProduct(id: ID!, title: String!, description: String, code: String, thumbnail: String!, price: Int!, stock: Int): Product!
        deleteProduct(id: ID!): ID!
    }
    
    `
)



const schemaUser = buildSchema(`
  
    type User {
        timestamp: String!,
        username: String!,
        password: String!
        email: String!,
        adress: String!,
        phone: String!,
        avatar: String,
        cartId: String!
    }

    
    `
)

const schemaChat = buildSchema(`
   

    type Chat {
        author: Author!
        text: String!
        date: String!
      }
      
      type Author {
        email: String!
        name: String!
        lastname: String!
        age: Int!
        nickname: String!
        avatar: String!
      }
    
    `
)

module.exports = { schemaProduct }