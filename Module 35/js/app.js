
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
}


const displayProduct = (productFeild, quaintityFeild) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText =  `${productFeild} ${quaintityFeild}`
    productContainer.appendChild(li)
}