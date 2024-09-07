
    function add(num1, num2){
        return num1 + num2;
    }

    function substract(num1, num2){
        return num1 - num2;
    }

    function multiplay(num1, num2){
        return num1 * num2;
    }

    function devide(num1, num2){
        return num1 / num2;
    }


    function calculator(a, b, oparation){
        if(oparation === 'add'){
            const result  = add(a,b);
            return result;
        }
        else if(oparation === 'substract'){
            const result = substract(a, b);
            return result;
        }
        else if(oparation === 'multiplay'){
            const result = multiplay(a, b);
            return result;
        }
        else if(oparation === 'devide'){
            const result = devide(a, b);
            return result;
        }
    }

    const result = calculator(5,7, 'devide');
    console.log(result);