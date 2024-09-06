function leapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLeapYear = leapYear(2400);
console.log(isLeapYear);


function yearLeap(mainYear){
    if(mainYear % 4 === 0 && mainYear !== 0){
        return true;
    }
    else{
        return false;
    }
}
const atakiLeapYear = yearLeap(2050);
console.log(atakiLeapYear);