const { getAllProductsController, getProductByIdController, newProductController, updateProductController, delProductByIdController } = require('../../controllers/productsController');
const { schemaProduct } = require('./schema')

const resolvers = {
  Query: {
    getAllProducts: async () => {
      const productos = await getAllProductsController();
      return productos;
    },
    getProductById: async (_, { id }) => {
      const productById = await getProductByIdController(id);
      if (productById) {
        return productById;
      } else {
        throw new Error('Product not found');
      }
    },
  },
  Mutation: {
    addProduct: async (_, { title, description, code, thumbnail, price, stock }) => {
      const product = {
        title,
        description,
        code,
        thumbnail,
        price,
        stock,
      };
      await newProductController(product);
      return product;
    },
    updateProduct: async (_, { id, title, description, code, thumbnail, price, stock }) => {
      const productUpdate = {
        title,
        description,
        code,
        thumbnail,
        price,
        stock,
      };
      const productById = await getProductByIdController(id);
      if (productById) {
        await updateProductController(id, productUpdate);
        return productUpdate;
      } else {
        throw new Error('id invalid / missing fields');
      }
    },
    deleteProduct: async (_, { id }) => {
      const deleteProdById = await delProductByIdController(id);
      if (deleteProdById) {
        return id;
      } else {
        throw new Error('Product not found');
      }
    },
  },
};

module.exports = resolvers;