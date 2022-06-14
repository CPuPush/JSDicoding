/**
 * promise dapat menggantikan peran callback dengan mengunakan //*.then
 * Promise memiliki perilaku:
 * //*Pending (janji sedang dalam proses)
 * //*Fulfilled(janji terpenuhi)
 * //*Rejected(janji gagal terpenuhi)
 */

//!CONSTRUCTING PROMISE OBJECT
/**
 * promise merupakan sebuah object yang digunakan untuk membuat sebuah komputasi ditangguhkan dan berjalan
 * secara asynchronous.
 * untuk membuat object promise, kita gunakan keyword new diikuti dengan constructor dari Promise
 */
// const coffee = new Promise();
/*
dalam constructor promise, kita perlu menetapkan resolver function atau bisa disebut executor function. fungsi tersebut akan
dijalankan secara otomatis ketika constructor promise dipanggil.
*/
const executorFunction = (resolve, reject)=>{
    const isCoffeeMakerReady = true;
    if(isCoffeeMakerReady){
        resolve("Kopi berhasil dibuat");
    }else{
        reject("Mesin kopi tidak bisa digunakan");
    }
}
const makeCOffee = ()=>{
    return new Promise(executorFunction);
}
const coffeePromise = makeCOffee();
console.log(coffeePromise);
/**
 * executor function memiliki 2 parameter yaitu resolve dan reject yang berupa function.
 * //*resolve() 
 * merupakan function yang dapat menerima 1 parameter. biasanya digunakan untuk mengirimkan data
 * ketika promise berhasil dilakukan. ketika fungsi ini terpanggil, kondisi promise akan berubah dari 
 * pending menjadi fulfilled
 * //*reject()
 * adalah parameter kedua pada executor function, yang merupakan fungsi yang dapat menerima satu parameter
 * dan digunakan untuk memberikan alasan kenapa Promuse tidak dapat terpenuhi.
 * ketika fungsi terpanggil, kondisi promise akan berubah dari pending menjadi rejected
 */

/**
 * dalam praktik aslinya promise digunakan untuk menjalankan proses asynchronous seperti mengambil data
 * dari internet/API. hasil permintaan data dapat terpenuhi atau mengalami kegagalan.
 * output yang dihasilkan baik ketika fulfilled ataupun rejected masih berupa Promise, bukan nilai yang dibawa
 * oleh fungsi resolve atau reject. bagaimana kit abisa mengakses nilai yang dibawa oleh fungsi tersebut
 * yaitu menggunakan method //?.then() yang tersedia pada objek promise
 */