
    const user = {id : 1, name: 'Gorib Amir', job: 'Actor'};
    const stringfield = JSON.stringify(user)
    // console.log(user)
    // console.log(stringfield)

    const shop = {
        owner :'Alliya',
        adress : {
            street : 'Kocuket voot er goli',
            city : 'ranbor',
            country : 'BD',
        },
        products : ['laptop', 'keyborard', 'mouse', 'light'],
        revenue : 45000,
        isOpen : true,
        isNew : false
    }

    console.log(shop)

    //Onject to string
    const shopJson = JSON.stringify(shop)

    console.log( typeof shopJson)

    //String to object
    
    const shopOj = JSON.parse(shopJson)
    console.log('this will be object', shopOj)