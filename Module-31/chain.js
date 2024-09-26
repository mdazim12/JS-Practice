
    const data = [{ id : 1, name : 'abdul', address : 'kocukhet'}];
    // console.log( data[0].address)

    const product = {
        count : 5000,
        data : [
            {id : 1, name : 'Hp laptopo', price : 45000},
            { id : 2, name : 'MackBook', price : 130000 },
        ]
    }

    // console.log(product.data[0].name)


    const user = {
        id : 5001,
        name : 'shoriful Islam',
        address : {
            frist : '54 / 1 uttor side',
            secound : 'Poribag ar guli',
            third : 'no dorai',
        }
    }
    console.log(user.address.secound)

    const user2 = {
        id : 5002,
        name : 'Poribager',
        adress : {
            city : 'Chitagong',
            country : 'Bangladesh'
        }
    }

    console.log(user2.adress.secound?.city)
