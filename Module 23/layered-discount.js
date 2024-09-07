/*
 *   frist 100 --> 100
 *   101 to 200 --> 90
 *   201 to 300 --> 70

*/

 function layedDiscountedTotal(quanity){
    const first100Price = 100;
    const secound100Price = 90;
    const above200Price = 70;

    if(quanity <= 100){
        const total = quanity * first100Price;
        return total;
    }
    else if(quanity <= 200){
        const first100Total = quanity * first100Price;
        const remainingQuantiy = quanity - 100;
        const remainingTotal = remainingQuantiy * secound100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const frist100Total = 100 * first100Price;
        const secound100Total = 100 * secound100Price;
        const remainingQuantiy = quanity - 200;
        const remainTotal = remainingQuantiy * above200Price;
        const total = frist100Total + secound100Total + remainTotal;
        return total;

    }


 }

 const mainDiscount = layedDiscountedTotal(220);
 console.log('The main discount is:', mainDiscount);

