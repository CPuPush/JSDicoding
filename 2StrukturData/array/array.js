/**
 * Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel
 */
let myArray = ["Cokelat",54 ,"True Programmer",34,true, "Programming"];
console.log(myArray);
//data pada array dapat disusun secara berurutan dan diakses menggunakan index
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray.length);
/**memanipulasi nilai pada Array */

//menambah property di belakang
myArray.push("javaScript");
console.log(myArray)

//mengeluarkan data atau element terakhir dari array
myArray.pop();
console.log(myArray);

//shift() digunakan untuk mengeluarkan element pertama dari array
myArray.shift();
console.log(myArray);

//menambah element pertama
myArray.unshift("Apple");
console.log(myArray);

//menghapus element menggunakan indexing
delete myArray[1];//tetapi membiarkan field tetap kosong
console.log(myArray);

//untuk menghapus element bisa dengan
myArray.splice(1, 1) //menghapus dari index 2 sebanyak 1
console.log(myArray);