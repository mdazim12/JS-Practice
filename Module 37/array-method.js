
    const products = [
        { name : 'laptop' , price: 32000, brand : 'HP' , color : 'gray' },
        { name : 'Phone' , price: 2000, brand : 'samsung' , color : 'black' },
        { name : 'wacth' , price: 400, brand : 'casio' , color : 'red' },
        { name : 'sunclass' , price: 600, brand : 'rebon' , color : 'yellow' },
        { name : 'laptop' , price: 32000, brand : 'HP' , color : 'gray' },
        { name : 'camera' , price: 9000, brand : 'canon' , color : 'sliver' },
    ]

    const brands = products.map(product => product.brand);
    // console.log(brands)

    const allPrice = products.map(x => x.price);
    // console.log(allPrice)


    //For Each function who is no return
    products.forEach( x => console.log(x));
    products.forEach(y => console.log(y.color))



    //filter
    const cheapPrice = products.filter(x => x.price <= 5000);
    // console.log(cheapPrice)
    const spacificName = products.filter(z => z.name.includes('ss'));
    console.log(spacificName)