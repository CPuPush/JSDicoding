/**
 * hal yang sering membingungkan ketika bekerja dengan program synchronous dan asynchronous adalah
 * bagaimana menangani suatu ilai yang didapatkan secara asynchronous pada program yang berjalan secara
 * synchronous.
 */

// const orderCoffee = ()=>{
//     let coffee = null;
//     console.log("Sedang membuat kopi, silahkan tunggu...");
//     setTimeout(()=>{
//         coffee = "Kopi sudah jadi!"
//     }, 3000);
//     return coffee;
// }
// const coffee = orderCoffee();
// console.log(coffee);

/**
 * keluarannya menjadi salah karena setTimeout() tidak akan menghentikan JS untuk mengeksekusi kode yang ada 
 * selanjutnya.
 * sehingga akan selalu mengeksekusi null karena return coffee yang akan dieksekusi terlebih dahulu.
 * sehingga melakukan cara dengan //*callback function
 * 
 * callback diperintahkan pada sebuah fungsi asynchronous kemudian akan dipanggil/digunakan ketika tugas itu selesai.
 * 
 */

//ubah kode diatas menjadi seperti ini
 const orderCoffees =(callback)=>{
    let coffee = null;
    console.log("Sedang membuat kopi, silahkan tunggu...");
    setTimeout(()=>{
        coffee = "Kopi sudah jadi!"
        callback(coffee);
    }, 3000);
    // return coffee;
}
orderCoffees(coffee=>{
    console.log(coffee);
})