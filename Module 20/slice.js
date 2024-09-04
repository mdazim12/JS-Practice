const adress = 'Burigonna';
const addressPart = adress.slice(0,8);
// console.log(addressPart);

const sentence = 'I am a good & hardworking person';
// console.log( sentence.split(' '));
// console.log(sentence.split('a'));

const friendsStr = 'Rahim, Karim, sallim, Fahim, Udhim';
const friend = friendsStr.split(',');
// console.log(friend)

const realFriend = [ 'Rahim', ' Karim', ' sallim', ' Fahim', ' Udhim' ];
console.log(  realFriend.join() );
console.log(  realFriend.join('|') );
console.log(  realFriend.join('--') );
