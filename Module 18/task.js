const method = 'standerd';
const weight = 11;

if( method === 'standerd'){
    if(weight >= 5 && weight <= 10){
        console.log('FREE DELIVERY')
    }
    else{
        console.log('YOU HAVE TO PAY')
    }
}


 const age = 13;
 const time = 5;

if( age <= 12){
    console.log('Price $5 FOR ALL DAY');
}
else if(age >= 13 && age <= 64 ){
    if( time <= 5 ){
        console.log('price will be 10');
    }
    else if ( time >= 5){
        console.log('price will be $12');
    }
}
else if( age >= 65){
    if( time <= 5){
        console.log('Price will be $7');
    }
    else if( time <= 5 ){
        console.log('price will be $8');
    }
}



function add(num1,num2) {
    const result = num1 + num2 ;
    
    return result;
}

const sum =  add(5,7);

console.log(sum)
