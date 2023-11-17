const addProduct= ()=>{
const productField = document.getElementById('product-field');
const productQuantity = document.getElementById('product-quantity');
const product = productField.value;
const quantity = productQuantity.value;
productField.value = '';
productQuantity.value = '';
showProduct(product, quantity);
saveProductToLocalStorage(product, quantity);
};

const showProduct = (product, quantity)=>{
console.log(product+' : '+ quantity);
const itemContainer = document.getElementById('item-container');
const li = document.createElement('li');
li.classList.add('item-list');
li.innerText = `${product} : ${quantity}`;
itemContainer.appendChild(li);
};

const getStoredShoppingCart = ()=>{
    let cart = {};
    const storedCart = window.localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
};
const saveProductToLocalStorage = (product, quantity)=>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    window.localStorage.setItem('cart', cartStringified);
};
const displayProductFormLocalStorage = ()=>{
    const saveCart = getStoredShoppingCart();
    for(const product in saveCart){
        const quantity = saveCart[product];
        showProduct(product, quantity);
    }
};
displayProductFormLocalStorage();