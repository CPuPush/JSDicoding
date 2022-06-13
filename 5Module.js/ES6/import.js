//ketika menggunakan export default, kita dapat menggunakan penamaan apa saja saat mendeklarasikan variable
import coffee from './es6.js';
 
const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(coffee);

//!cara mengatasi error untuk mengaktifkan ES6 module
/**
 * 1. pada package.json tambahkan property type dengan nilai module
 * 2. mengubah extensi menjadi mjs
 */