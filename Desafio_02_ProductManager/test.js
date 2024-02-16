//! TESTs
// npm start

const ProductManager = require('./ProductManager');
const main = async () => {
    // 1. Genera una instancia de la clase ProductManager
    console.log('\n---- TEST 01: Instancia ProductManager ----');
    const manager = new ProductManager('./products.json');

    // 2. Se llama getProduct recien creada la instancia, debe devolver un arreglo vacio []
    console.log('\n---- TEST 02: getProducts()) ----');
    console.log(await manager.getProducts());

    // 3. Se llama al metodo addProduct con un objeto predefinido.
    console.log('\n---- TEST 03: addProduct() ----');
    let productoPrueba = {
        title: "producto prueba",
        description: "Este es un producto prueba",
        price: 200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25
    }
    console.log(await manager.addProduct(productoPrueba));

    // 4. Se llama al metodo getProducts nuevamente: Debe aparecer el producto recien agregado
    console.log('\n---- TEST 04: getProducts() - Nuevamente ----');
    console.log(await manager.getProducts());

    // 5. Se llama al metodo getProductById (Id Existente)
    console.log('\n---- TEST 05: getProductById(✔) ----');
    console.log(await manager.getProductById(1));

    // 6. Se llama al metodo getProductById (Id No Existente)
    console.log('\n---- TEST 06: getProductById(✖) ----');
    console.log(await manager.getProductById(9999)); // ERROR: Product not found

    // 7. Se llama al metodo updateProduct (field Existente)
    console.log('\n---- TEST 07: updateProduct(field ✔) ----');
    let field = 'title';
    let nuevo_valor = 'Nuevo titulo';
    console.log(await manager.updateProductById(1, field, nuevo_valor));

    // 8. Se llama al metodo updateProduct (field no existente)
    console.log('\n---- TEST 08: updateProduct(field ✖) ----');
    field = 'field inexistente';
    nuevo_valor = 'Nuevo titulo';
    console.log(await manager.updateProductById(1, field, nuevo_valor)); // ERROR: field no pertenece al objeto

    // 9. Se llama al metodo deleteProduct (Id Existente)
    console.log('\n---- TEST 09: deleteProduct(id ✔) ----');
    console.log(await manager.deleteProductById(3));

    // 10. Se llama al metodo deleteProduct (Id inexistente)
    console.log('\n---- TEST 09: deleteProduct(id ✖) ----');
    console.log(await manager.deleteProductById(999));
}
main();