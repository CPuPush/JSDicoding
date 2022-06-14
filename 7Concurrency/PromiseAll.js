/*
bagaimana jika kita ingin menjalankan banyak promuse sekaligus tanpa memedulikan urutan?
bukankah concurrency memungkinkan kita melakukan banyak proses bersamaan agar lebih efisien?

Ketika pergi ke sebuah kedai kopi bersama rekan kerja, kita biasanya memesan kopi secara bersamaan. 
Meskipun kopi yang kita pesan berbeda, tak jarang pelayanan mengantarkan pesanan bersamaan. 
Nah, pada kasus inilah pelayan menggunakan teknik Promise.all().

method Promise.all() dapat menerima banyak promise dalam bentuk array pada paramternya.
kemudian method tersebut akan mengembalikan nilai seluruh hasil dari promise dalam bentuk array.
*/
//ex
const promises = [firstPromise(), secondPromise(), thirdPromise()];
Promise.all(promises)
    .then(resolvedValue=>{
        console.log(resolvedValue);
    });