 const school = 'Rak Uk Moddel COLLAGE';
 const colllage = 'rak uk model collage';

//  make lowercase use javascript funcrion 

const newCollage = school.toLowerCase();
console.log(newCollage)


// make uppercase use Javascriot function

 const upScholl = school.toUpperCase();
 console.log(upScholl);

const book = 'Math';
const newBook = 'math';

if( book.toLocaleLowerCase() === newBook.toLocaleLowerCase() ) {
    console.log('Book Match');
}
else{
    console.log('You have to buy new book');
}

let fristName = 'Joan';
let lastName = 'joan';

if(fristName.toLocaleLowerCase() === lastName.toLocaleLowerCase() ){
    console.log('Your name is match');
}
else{
    console.log('Please ennter right name');
}


const drink = 'water';
const lequid = ' water        ';

//Use Trim Function to remove exrta space 

if(drink.trim() === lequid.trim() ) {
    console.log('Pani ar opor name jibon');
}
else{
    console.log ('tui mori ja');
    
}


