/**
jika secara manual menambahkan array akan seperti berikut
 */
const _ = require('lodash');

const arr = [1,2,3,4,5];

let sumArr  = arr.reduce((prec, curr)=>{
    return prec + curr
})  
console.log(sumArr);

//menggunakan lodash
console.log(_.sum(arr));