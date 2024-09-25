
    const differnce = (x, y) => x + y;
    const sum = differnce(10 , 20);
    // console.log(sum)


    const getAge = (person) => person.age;
    const student = {name : 'ananata' , age : 45};
    const age = getAge(student);
    console.log(age)


    const getThird = numbers => numbers[0];
    const third = getThird([89,24,2432,453,23434]);
    console.log(third)


    const dobuleIt = num => num * 2;



    // No peramitter arrow function\
    const getPI = () => Math.PI
    console.log(getPI())



    //large perametter
    const doMath = (x, y, z) => {
        const sum = x + y + z;
        const multipy = x * y * z;
        const result = sum + multipy;
        return result;
       
    }

    


  
