const catalogue = [
  { id: 1, name: "Tacos", price: 8.5, inStock: true },
  { id: 2, name: "Poke bowl", price: 11, inStock: false },
  { id: 3, name: "Tiramisu", price: 5, inStock: true },
];



function addToCart(cartn, dish) {
    
 return[...cartn,  dish];

}





function applyDiscount(cartnew, percent) {
  return cartnew.map((dish) => {
   return {
      ...dish,
      price: dish.price * (1 - percent / 100)
    };
  });
}



function cartTotal(cartnew1) {
  return cartnew1.reduce((sum, dish) => sum + dish.price, 0);
}


const cart = addToCart([], catalogue[0]);
const biggerCart = addToCart(cart, catalogue[2]);
const discountedCart = applyDiscount(biggerCart, 20);
console.log(cartTotal(discountedCart));   // 10.8
console.log(cartTotal([]));               // 0
console.log(cart.length);                 // 1
console.log(catalogue[0].price);          // 8.5

