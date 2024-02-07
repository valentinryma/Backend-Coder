class ProductManager {
    #firstId = 1;
    #products;

    constructor() {
        this.#products = [];
    }

    #getNewId() {
        const id = this.#firstId;
        this.#firstId += 1;
        return id;
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        // Validamos que ningun campo este vacio.
        if (!(title && description && price && thumbnail && code && stock)) {
            console.error("Error: No field can be empty.\n")
        }

        // validamos que el campo code, no se repita
        const codeUse = this.#products.find(p => p.code.includes(code));

        if (codeUse) {
            console.error("Error: This code already used \n");
            return;
        }

        const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.#getNewId()
        }

        this.#products.push(newProduct);
        console.log(`Product: ${newProduct.title} added successfully \n`);
    }

    getProducts() {
        return this.#products;
    }

    getProductById(productId) {
        const product = this.#products.find(p => p.id === productId);
        if (!product) {
            console.error("Error: Product not found \n");
            return;
        }
        return product;
    }
};

//* TESTS:
const productManager = new ProductManager; // 01: Creacion de la Instancia

console.log(productManager.getProducts()); // 02: Debe devolver: []

productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25); // 03: addProduct

console.log(productManager.getProducts()); // 04: Debe mostrar el producto recien agregado

productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25); // 05: Debe arrojar code repetido

console.log(productManager.getProductById(1)); // 06: Debe mostrar el producto con id 1
console.log(productManager.getProductById(42)); // 07: Debe mostrar un mensaje de error. (Product not found)



