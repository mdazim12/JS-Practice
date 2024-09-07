const jim = 102;
const tim = 120;
const kim = 15;

if(jim > tim && jim > kim){
    console.log('Jim is winnner');
}
else if(tim > jim && tim > kim){
    console.log('tim is winner');
}
else{
    console.log('kim is universal boos');
}

 function maxOfThree(num1,num2,num3){
    if(num1 > num2 && num1 > num3) {
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
 }

 const maxNumber = maxOfThree(70,90,40);
 console.log(maxNumber);