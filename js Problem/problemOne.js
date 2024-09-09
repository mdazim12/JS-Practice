 
 function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return 'Invalid Number';
    }

    const result = ticketSale * 120 - (500 + 8 * 50);
    return result;
 }

 console.log(calculateMoney(-10));