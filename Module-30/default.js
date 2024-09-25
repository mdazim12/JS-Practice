
function add(num1, num2 = 5) {
    const result = num1 + num2;
    console.log(result, num1, num2)
    return result;
}

const sum = add(5, 20);

function fullName(first , last = 'ABul'){
    const full = first + ' ' + last;
    console.log(full)

}
fullName('kotim' )



// Array expect as a function argument

function friend(num = []){

}

// Object expect as a function argument

    function person(human = {}){

    }



