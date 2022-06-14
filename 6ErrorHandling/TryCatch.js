/**
 * taruh kode yang berpeluang menimbulkan error didalam blok try. Apabila terjadi error didalam blok
 * kode try, maka ia akan ditangkap dan ditangani oleh blok kode catch. sementara, jika tidak terjadi error pada kode,
 * maka blok catch akan diabaikan
 */
try{
    console.log("awal block");
    console.log("akhir block");
}catch{
    console.log(
        'tangkap error'
    );
}

const tryCatch = ()=>{
    try{
    console.log('awal blok try');
    errorCode;
    console.log('akhir blok try');
    }catch{
        console.log('Terjadi kesalahan mohon ditungggu');
    }
}
tryCatch();

/**
 * pada blok catch. disana memiliki satu parameter bernama error (nama variable bisa diubah).
 * variable error tersebut merupakan sebuah object yang menyimpan detail informasi dari error yang terjadi.
 * object error memiliki beberapa properti utama didalamnya yaitu
 * 1. name : Name error yang terjadi
 * 2. Pesan tentang detail error
 * 3. Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang
 * menyebabkan error
 */

 try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}