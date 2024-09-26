const product = [
    {id : 1 , name : 'lenevo', price : 650000},
    {id : 2 , name : 'dell', price : 450000},
    {id : 3 , name : 'hp', price : 40000},
    {id : 4 , name : 'mac', price : 1650000},
]

    //Map
    const names = product.map(product => product.name)
    console.log(names)
    const prices = product.map(product => product.price)
    console.log(prices)
    const id = product.map(product => product.id)
    console.log(id)

    //foreach
    product.forEach(p => console.log(p.id))

    //filer
    const expenssive = product.filter(p => p.price > 50000);
    console.log(expenssive)

    // find 
    const affordable = product.find(p => p.price < 50000)
    console.log(affordable)

    //reduce 
    const total = product.reduce( (acum , curr) => acum + curr.price, 0)
    console.log(total)