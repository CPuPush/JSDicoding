/**
 * array.some()=> merupakan fungsi bawaan yang menghasilkan nilai boolean
 * array.some(callback(element, [index], [array], [thisArg]))
 * //*[...] adalah optional parameters
*/

//ex kita ingin mengetahui apakah deretan angka terdapat angka genap
const array = [2,4,6,8];
//ganjil
const isOdd= array.some(arr=>arr%2==1);
console.log(isOdd);