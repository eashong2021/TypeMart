"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = 'fanny pack';
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = "Plot 3 Block K, South Patasi, Kumasi, Ghana, West Africa";
const product = products_1.default.filter(product => {
    return product.name === productName;
})[0];
if (product.preOrder) {
    console.log('We will send you a message your product ships');
}
if (Number(product.price) > 25) {
    console.log('This item will receive free shipping.');
    shipping = 0;
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = (Number(product.price)) * taxPercent;
total = (Number(product.price)) + taxTotal + shipping;
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
