module.exports.typeDefs = `#graphql
    type Product {
        id: ID!
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

    type Query {
        products: [Product]!
        product(productId: ID!): Product!
    }

    type Mutation {
        addProduct(title: String!, description: String, code: String, thumbnail: String!, price: Int!, stock: Int): Product!
        updateProduct(id: ID!, title: String!, description: String, code: String, thumbnail: String!, price: Int!, stock: Int): Product!
        deleteProduct(id: ID!): ID!
    }
    
    `
 ;

