
    // const hello = localStorage.getItem('hello')
    // console.log(hello)

    // const setAge = () =>{
    //     localStorage.setItem('age' , '45')
    // }

    // const removeAge = () => {
    //     localStorage.removeItem('age')

    

const addProduct = () =>{
    const productName = document.getElementById('product-name');
    const productQuaitiy = document.getElementById('product-quaintity');
    const productFeild = productName.value;
    const quaintityFeild = productQuaitiy.value;
    productName.value = '';
    productQuaitiy.value =''


    // console.log(productFeild , quaintityFeild)
    displayProduct(productFeild, quaintityFeild);
    saveProductToLocalStorage(productFeild,quaintityFeild)
   
}


const displayProduct = (productFeild, quaintityFeild) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText =  `${productFeild} ${quaintityFeild}`
    productContainer.appendChild(li)
}

const getStoreShopingCart = () =>{
    const storedCart = localStorage.getItem('cart');
    let cart = {}
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveProductToLocalStorage = (product, quaintity) =>{
    const cart = getStoreShopingCart();
    cart[product] = quaintity;
    const cartStringifield = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringifield)
}