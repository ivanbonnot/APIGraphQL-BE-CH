const { MongoClient, ObjectId } = require('mongodb');
const { GraphQLServer } = require('graphql-yoga');

const url = 'mongodb://localhost:27017';
const dbName = 'test';
const client = new MongoClient(url);

const resolvers = {
  Query: {
    getProduct: async (_, { id }) => {
      const db = client.db(dbName);
      const collection = db.collection('products');
      const product = await collection.findOne({ _id: ObjectId(id) });
      return product;
    },
    getProducts: async () => {
      const db = client.db(dbName);
      const collection = db.collection('products');
      const products = await collection.find().toArray();
      return products;
    },
  },
  Mutation: {
    createProduct: async (_, productToAdd) => {
      const db = client.db(dbName);
      const collection = db.collection('products');
      const result = await collection.insertOne(productToAdd);
      const product = await collection.findOne({ _id: result.insertedId });
      return product;
    },
    updateProduct: async (_, { id, productToUpdate }) => {
      const db = client.db(dbName);
      const collection = db.collection('products');
      const query = { _id: ObjectId(id) };
      const update = {};
      if (productToUpdate) update.productToUpdate = productToUpdate;
      const options = { returnOriginal: false };
      const result = await collection.findOneAndUpdate(query, { $set: update }, options);
      return result.value;
    },
    deleteProduct: async (_, { id }) => {
      const db = client.db(dbName);
      const collection = db.collection('products');
      const query = { _id: ObjectId(id) };
      const result = await collection.findOneAndDelete(query);
      return result.value;
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
});

client.connect(() => {
  server.start(() => console.log('Server is running on localhost:4000'));
});