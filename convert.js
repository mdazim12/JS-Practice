
function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
console.log(inchToFeet(75))


function myHeight(height){
    const feetHeight = height / 12;
    const feetInch = parseInt(feetHeight);
    const remainHeight = feetInch /12;
    const result = feetHeight + remainHeight;
    return result;
}
console.log(myHeight(75));