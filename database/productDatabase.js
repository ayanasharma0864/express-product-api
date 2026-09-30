let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Phone",
        price: 30000
    },
    {
        id: 3,
        name: "Headphones",
        price: 2000
    }
];

async function getAllProducts() {
    return products;
}

async function getProductById(id) {
    return products.find(product => product.id === id);
}

async function createProduct(product) {
    const newProduct = {
        id: products.length > 0
            ? Math.max(...products.map(product => product.id)) + 1
            : 1,
        name: product.name,
        price: product.price
    };

    products.push(newProduct);

    return newProduct;
}

async function updateProduct(id, data) {
    const product = products.find(product => product.id === id);

    if (!product) {
        return null;
    }

    // Update only the fields that were provided
    if (data.name !== undefined) {
        product.name = data.name;
    }

    if (data.price !== undefined) {
        product.price = data.price;
    }

    return product;
}

async function deleteProduct(id) {
    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        return null;
    }

    const deletedProduct = products.splice(index, 1);

    return deletedProduct[0];
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};