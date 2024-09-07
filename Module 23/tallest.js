const height = [60,43,64,46,67,23,87,65,333];

function getMax(number){
    let max = number[0];
    for( const num of number){
      if(num > max){
        max = num
      }
    }
    return max;
}

const max = getMax(height);
console.log('Tallest option is:',max)