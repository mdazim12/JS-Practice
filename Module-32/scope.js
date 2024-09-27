
    function add(a, b){
        const total = a + b;
        if(b > 5){
            const sum = 25 + a + b;
            // console.log(sum)
        }
        return total
    }
    
//    console.log (add(3,59))

    //Hoisting
    print5()
    print10()
    for(let i = 0; i < 5; i ++){
        console.log(i)
    }
    // console.log('outside value is', i)

    function print5(){
        console.log('Inside Print is:', 5)
    }

    const print10 = function(){
        console.log('Print10',10)
    }
          

