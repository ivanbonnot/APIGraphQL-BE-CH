const { getProductsDTO, getProductByIdDTO } = require('../../../DTO/productsDTO')

module.exports.productQueries = {
  products: async () => await getProductsDTO(),
  product: async (_, { productId }) => await getProductByIdDTO(productId),
};