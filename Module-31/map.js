
    // const numbers = [2,4,6,8,10];

    // const dobuled = [];

    // for(num of numbers){
    //     const dobule = num * 2;
    //     dobuled.push(dobule)
    // }
    // console.log(dobuled)

    const numbers = [2,4,6,8,10];

    function dobuleIt(num){
        // console.log('Num now :', num)
        return num * 2;
    }
    const result = numbers.map(dobuleIt)

    // console.log('This is form map',result)


    const dobule2 = n => n * 2;
    const output = numbers.map(dobule2);
    // console.log(output)

    const output2 = numbers.map( n => n * 2)
    console.log(output2)