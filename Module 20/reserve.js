 const sentence = 'I am web developer';
 let reserve = ' '

 for(const letter of sentence){
    console.log(letter);
    reserve = letter + reserve;
 }
 console.log(reserve)

let rev = ' ';

for(i = 0; i < sentence.length; i++){
    const latter = sentence[i];
   rev = 
latter + rev;
}
console.log(rev);


// Shortcut reserve

const reserved = sentence.split('').reverse().join('');
console.log(reserved)