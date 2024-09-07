const products = [
    {name : 'shampo', price : 50, quanity: 2},
    {name : 'chirioni', price : 50, quanity: 5},
    {name : 'shirt', price : 50, quanity: 5},
    {name : 'pant', price : 1300, quanity: 5},
]

function cartTotal(products){
    let total = 0;
    
    for(const product of products){
        const thisProductPrice = product.price * product.quanity;
        total = total + thisProductPrice;
    }
    return total;
}

const shoppingCart = cartTotal(products);
console.log(shoppingCart);