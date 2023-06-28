'use strict';

function createAdder (n){
    let summa = n
    return function adder(m){
        return summa += m

    }
}


const adder = createAdder(10)
console.log(adder(2))
console.log(adder(3))
console.log(adder(7))