import products from './products';

const productName: string = 'tote bag';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "Plot 3 Block K, South Patasi, Kumasi, Nigeria";

const product = products.filter(product => {
  return product.name === productName;
})[0];
if (product.preOrder) {
console.log('We will send you a message your product ships');
}

if (Number(product.price) > 25) {
  console.log('This item will receive free shipping.');
  shipping = 0;
}else {
  shipping = 5;
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
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






