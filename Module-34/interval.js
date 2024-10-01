

console.log(1)
console.log(2)
console.log(3)

// setTimeout(()=> {
//     console.log(3)
// })

// setTimeout(() => {
//     console.log ('tui aktu pore ai')
// } , 4000)


let num = 0;

const clockId = setInterval( () => {
    num++;
    console.log( clockId,num)
}, 2000)
console.log(4)
console.log(5)
