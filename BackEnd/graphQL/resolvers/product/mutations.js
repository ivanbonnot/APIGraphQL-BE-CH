const { deleteProductDTO, addNewProductDTO, updateProductDTO } = require('../../../DTO/productsDTO')

module.exports.productMutation = {
    addProduct: async (_, { productToAdd }) => await addNewProductDTO(productToAdd),
    updateProduct: async (_, { productId, productToUpdate }) => await updateProductDTO(productId, productToUpdate),
    deleteProduct: async (_, { productId }) => await deleteProductDTO(productId),
}