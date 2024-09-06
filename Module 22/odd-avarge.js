 


    function oddAgarge(numbers){
        const odds = [];
       for( const number of numbers){
        if(number % 2 === 1){
            odds.push(number)
        }
       }

     //    console.log(odds)

       let sum = 0;
       for(const number of odds){
        sum = sum + number;
     }
       
      console.log(sum)
      const total = sum / odds.length;
      return total;
      
    }

    const numbers = [1,2,3,4,5,6,7,8,9,11,12];
    const avg = oddAgarge(numbers);
    console.log('avarge is', avg);
