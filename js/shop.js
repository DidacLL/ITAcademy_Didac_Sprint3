let products;
fetch('data/products.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        products = data;
        console.log(products)
    })
    .catch(function(error) {
        console.log('Error al cargar el archivo JSON:', error);
    });

// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects),
// but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
function buy(id) {
    for (let p in products) if (p.id === id) {
        cartList.push(p)
        return
    }
}

// Exercise 2
function cleanCart() {
    cartList.length=0;
}

// Exercise 3
function calculateTotal() {
    cartList.forEach(p=>total+=p.total)
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the
    // quantity of product.
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}