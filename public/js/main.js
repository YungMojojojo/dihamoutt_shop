// GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');
// DIVS
var sweaterDIV = document.getElementById("sweaterDIV");
var trousersDIV = document.getElementById("trousersDIV");
var shoesDIV = document.getElementById("shoesDIV");
//INFORMATION
var SWEATER = [
    { name: 'Nike', price: 1 },
    { name: 'Adidas', price: 1 },
    { name: 'Puma', price: 1 },
    { name: 'Lacoste', price: 1 },
    { name: 'Hollister', price: 1 },
    { name: 'Burberry', price: 1 }
];
var TROUSERS = [
    { name: 'trousers #1', price: 10 },
    { name: 'trousers #2', price: 11 },
    { name: 'trousers #3', price: 12 }
];
var SHOES = [
    { name: 'shoes #1', price: 11 },
    { name: 'shoes #2', price: 12 },
    { name: 'shoes #3', price: 15 }
];
//HTML
function HTMLsweaterProduct(con) {
    let URL = `../img/sweaters/sweater${con}.jpg`;
    let btn = `btnsweater${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <p class="card-text">${SWEATER[con-1].name}</p>
                    <p class="card-text">Price: ${SWEATER[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${SWEATER[con-1].name}','${SWEATER[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" ><a style="color:inherit;" href="/cart">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${SWEATER[con-1].name}','${SWEATER[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping </small>
                    </div>
                </div>
            </div>
        </div>
    `
}

function HTMLtrousersProduct(con) {
    let URL = `img/trousers/trousers${con}.jpg`;
    let btn = `btntrousers${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <p class="card-text">${TROUSERS[con-1].name}</p>
                    <p class="card-text">Price: ${TROUSERS[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${TROUSERS[con-1].name}','${TROUSERS[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" ><a href="/cart" style="color:inherit;">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${TROUSERS[con-1].name}','${TROUSERS[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping </small>
                    </div>
                </div>
            </div>
        </div>
    `
}

function HTMLshoesProduct(con) {
    let URL = `img/shoes/shoes${con}.jpg`;
    let btn = `btnshoes${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <p class="card-text">${SHOES[con-1].name}</p>
                    <p class="card-text">Price: ${SHOES[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${SHOES[con-1].name}','${SHOES[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" ><a href="/cart" style="color:inherit;">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${SHOES[con-1].name}','${SHOES[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping </small>
                    </div>
                </div>
            </div>
        </div>
    `
}
//ANIMATION 
function animation() {
    const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000
    });
    toast({
        type: 'success',
        title: 'Added to shopping cart'
    });
}
// CART FUNCTIONS
function cart(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";
    animation();
}

function cart2(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";
}


(() => {
    for (let index = 1; index <= 6; index++) {
        sweaterDIV.innerHTML += `${HTMLsweaterProduct(index)}`;
    }
    for (let index = 1; index <= 3; index++) {
        trousersDIV.innerHTML += `${HTMLtrousersProduct(index)}`;
        shoesDIV.innerHTML += `${HTMLshoesProduct(index)}`;
    }
    if (localStorage.getItem("cart") == null) {

    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
    }
})();