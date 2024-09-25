
    //All keys fom an objects
    const glass = {
        name : 'glass',
        color : 'goldedn',
        price : 10,
        isClean : true,
    }

    const keys = Object.keys(glass);
    // // [ 'name', 'color', 'price', 'isClean' ]
    // // console.log(keys)


    // all value from an object

    const values = Object.values(glass)
    // [ 'name', 'color', 'price', 'isClean' ]
    // console.log(values)

    // All entries form an array
    const entries = Object.entries(glass);
    // [
    //     [ 'name', 'glass' ],
    //     [ 'color', 'goldedn' ],
    //     [ 'price', 10 ],
    //     [ 'isClean', true ]
    //   ]
    // console.log(entries)

    console.log(glass)

    // Delete items from an objects
    delete glass.isClean;
    console.log(glass)