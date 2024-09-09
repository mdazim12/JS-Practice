
function checkNane(name){
    if(typeof name !== 'string'){
        return 'Invaild';
    }
    const lastLatter = name[name.length - 1].toLowerCase();
    let result = false;
    const checkArray = ['a', 'y','i','e','o','u','w'];

    for(const char of checkArray){
        if(char === lastLatter){
            result = true;
        }
    }
    return result ? 'Good Name' : 'Bad Name';
}

console.log(checkNane('RAFFE'));