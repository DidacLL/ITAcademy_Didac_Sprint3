let jsonLoaded = false;
let products, cartList = [], cart = [], total = 0;
fetch('./products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        jsonLoaded = true;
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });



// Exercise 1
function buy(id) {
    if(jsonLoaded)
        products.forEach(function (p){
            if (p.id === id) {
                cartList.push(p)
                console.log(p.name + " added to cart")
            }
        })
}
// Exercise 2
function cleanCart() {
    cartList.length=0;
}

// Exercise 3
function calculateTotal() {
    let res=0;
    for (let i = 0; i < cartList.length; i++) {
        res+=cartList[i].price;
    }
   total=res;
}

// Exercise 4
function generateCart() {
    for (let i = 0; i < cartList.length; i++) {
        let found=false;
        if (cart.length !== 0) {
        cart.forEach(item => {
            if(item.id===cartList[i].id){
                item.quantity++;
                found=true;
            }
        });
        }
        if(!found){
            cartList[i]['quantity']=1
            cart.push({"qtt":1,"product":cartList[i]})
        }
    }
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