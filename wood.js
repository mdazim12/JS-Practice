

function woodQuantity ( chairQuantity, tableQuantity, bedQuantity ){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = chairQuantity *  perChairWood ;
    const totalTableWood = tableQuantity * perTableWood;
    const totalBedWood = bedQuantity * perBedWood; 

    const totalWood = totalBedWood + totalTableWood + totalChairWood;
    return totalWood;

}

const wood = woodQuantity(1,1,1) 
console.log('Total wood need for:',wood)