
function checkNane(name){
    if(typeof name !== 'string'){
        return 'Invaild';
    }
    const lastLatter = name[name.length - 1].toLowerCase();
    let result = false;
    const checkArray = ['a', 'y','i','e','o','u','w'];

    
    return result ? 'Good Name' : 'Bad Name';
}

console.log(checkNane('RAFFE'));