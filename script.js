console.log("Al Amin Luxury Store Loaded");

let cart = [];

function addToCart(item) {
  cart.push(item);
  alert(item + " added to cart 🛒");
}

function showCart() {
  alert("Cart Items: " + cart.join(", "));
}