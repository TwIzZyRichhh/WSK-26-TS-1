// Implement instances of the 'Product' type
function createElectronicDevice() {
    // TODO: Prompt user for electronic device details (brand and model)
    const brand = prompt("Enter device brand") ?? "" /* TODO: Get user input for brand */;
    const model = prompt("Enter device model") ?? "" /* TODO: Get user input for model */;
    // TODO: return object containing brand and model
    return { type: 'electronic', brand, model };
}
function createBook() {
    // TODO: Prompt user for book details (title and author)
    const title = prompt("Enter title") ?? "" /* TODO: Get user input for title */;
    const author = prompt("Enter author") ?? "" /* TODO: Get user input for author */;
    // TODO: return object containing title and author
    return { type: 'book', title, author };
}
// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
export {};
