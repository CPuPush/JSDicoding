/**
 * array.forEach() adalah fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada 
 * setiap iterasi index array. fungsi ini tidak mengembalikan nilai apapun. 
 * jadi fungsi ini callbackmya saja. tidak lebih dari itu
 */

const names = ['nano', 'every', 'log', 'is', 'more'];

//imperatif
// for(let i = 0; i < names.length; i++) {
//     console.log(`Hello, ${names[i]}!`);
//   }

//deklaratif
let newString = [];
names.forEach(el=>{
    newString.push(`This is ${el}!`);
});
console.log(newString);
/**
 * menggunakan foreach kita tidak bisa menggunakan break ataupun continue pada proses. 
 */