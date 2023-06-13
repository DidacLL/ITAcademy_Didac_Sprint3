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
                document.getElementById('count_product').innerText= ''+cartList.length;
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
    cart.forEach(item => {
        res+= (item.subtotalWithDiscount>0?item.subtotalWithDiscount:item.subtotal)
    });
   return total=res;
}

// Exercise 4
function generateCart() {
    for (let i = 0; i < cartList.length; i++) {
        let found=false;
        if (cart.length !== 0) {
        cart.forEach(item => {
            if(item.id===cartList[i].id){
                item.quantity++;
                item.subtotal+=cartList[i].price
                found=true;
            }
        });
        }
        if(!found){
            cart.push(cartList[i])
            let pos= cart.length-1;
            cart[pos]['quantity']=1
            cart[pos]['subtotal']=cart[pos].price;
            cart[pos]['subtotalWithDiscount']=0;
        }
    }
}

// Exercise 5
function applyPromotionsCart() {
    cart.forEach((item)=>{
        if(item.offer && item.quantity>=item.offer.number){
            let aux= item.subtotal * (1-item.offer.percent/100)
            item.subtotalWithDiscount= Math.round(aux * 100)/100
        }
    })
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let totalPrice=0;
    let list= document.getElementById('cart_list')
    let html=''
    generateCart();
    applyPromotionsCart();
    cart.forEach(item=>{
        html += "<th scope='row'>" + item.name+"</th>" +
            "<td>$"+item.price+"</td><td>"+
            item.quantity+"</td><td>$"+
            (item.subtotalWithDiscount?item.subtotalWithDiscount:item.subtotal)+
            "</td></tr>";
        totalPrice+= (item.subtotalWithDiscount?item.subtotalWithDiscount:item.subtotal);
    })
    document.getElementById('total_price').innerText=''+calculateTotal();
    list.innerHTML=html;
    document.getElementById('cartModal')
}
// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    if(jsonLoaded)
        products.forEach(function (p){
            if (p.id === id) {
                cartList.push(p)
                let found=false;
                for (let i = 0; i < cart.length; i++) {
                    if(cart[i].id===id){
                        cart[i].quantity++;
                        found=true;
                    }
                }
                if(!found) cart.push(p)
                document.getElementById('count_product').innerText= ''+cartList.length;
                console.log(p.name + " added to cart")
            }
        })
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