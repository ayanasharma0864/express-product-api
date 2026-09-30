const database = require("../database/productDatabase");

async function getAllProducts() {
    return await database.getAllProducts();
}

async function getProductById(id) {
    return await database.getProductById(id);
}

async function createProduct(product) {
    return await database.createProduct(product);
}

async function updateProduct(id, data) {
    return await database.updateProduct(id, data);
}

async function deleteProduct(id) {
    return await database.deleteProduct(id);
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};