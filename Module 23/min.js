 const price = [15000, 18000, 22000, 26000, 35000, 100000,22];

 function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
 }

 const cheap = getMin(price);
 console.log('This is lowest Number:', cheap);