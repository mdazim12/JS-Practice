


const product = [
    {name : 'shampo', price : 50},
    {name : 'chirioni', price : 50},
    {name : 'shirt', price : 50},
    {name : 'pant', price : 1300},
]

function getShopingTotal(products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price;
    }
    return sum;
}

const total = getShopingTotal(product)
console.log('Total Amount of:', total);