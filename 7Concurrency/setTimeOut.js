/**
 * fungsi setTimeOut merupakan cara paling mudah untuk membuat code dijalankan secara asynchronous.
 * menerima 2 parameter, parameter 1 funsgi yang akan dijalankan secara asynchronous,
 * parameter2  adalah nilai number dalam milisecond sebagai nilai tunggu sebelum fungsi dijalankan
 */

console.log("one");
setTimeout(()=>{
    console.log('two');
}, 3000);
console.log('three');

/**
 * jika secara synchonous, maka one tercetak setelah itu menunggu 3 detik, baru two dan three
 * 
 * jika asynchronous, maka satu dan 3 tercetak dan menunggu 2 selama 3 detik.
 * one
 * three
 * two
 */