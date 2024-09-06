 
  const name = ['Rohim','Korim','Josim','Korim','Rohim','Rejon'];
  const number = [2,2433,23,2.23,232,34.324,3,3,2,2433];

  function noDuplicate(array){
    const unique = []
    for( const item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique;
  }

  const uniqueArray = noDuplicate(name);
  console.log(uniqueArray)


  function mainNumber(number){
    const uniqueNumber = [];
    for(const item of number) {
        if(uniqueNumber.includes(item) === false){
            uniqueNumber.push(item);
        }
    }
    return uniqueNumber;
  }

 const idealNumber = mainNumber(number);
 console.log(idealNumber);
