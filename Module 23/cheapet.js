const phones = [
   { name: 'samsung', price: '20000', camera: '12mp', color: 'black' },
   { name: 'oppo', price: '18000', camera: '12mp', color: 'black' },
   { name: 'IPhone', price: '100000', camera: '12mp', color: 'black' },
   { name: 'walton', price: '12000', camera: '12mp', color: 'black' },
   { name: 'htc', price: '10000', camera: '12mp', color: 'black' },
];

function getCheapestPhone(phoneArray) {
   let min = phoneArray[0];
   for (const phone of phoneArray) {
       if (phone.price < min.price){
           min = phone;
       }
   }
   return min;
}

const cheap = getCheapestPhone(phones);
console.log(cheap);
