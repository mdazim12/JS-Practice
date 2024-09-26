
    const a = 56;
    const numbers = [23, 334, 544];
    const person = {
        name : 'sakib khan',
        age : 40,
    }

    // template string

    const result = `This is a varibale:${a} , this is form an array ${numbers[2]} , this is form an object ${person.name} `;

    // console.log(result) 


    // arrow function
    const squre = x  => x * x;
    const sum = (a , b) => a + b;


    //destructuring & spread oparation
    const {age , z,  ...others} = {x: 2, y: 4, z: 50 , name : 'obijeect' , age : 35};

    const [first , secound, third, ...remainming] = ['mode', 'kodu', 'chodu', 'jodu']
    console.log(secound)

