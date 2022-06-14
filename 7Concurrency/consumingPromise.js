/**
Status awal daro promuse adalah pending, kemudian akan ada dua kemungkinan fulfilled atau rejected
untuk menangani hasil dari promise kita gunakan method .then(). 
const myPromise = new Promise(executorFunction);
myPromise.then(onFullfilled, onRejected);

.then() adalah high order function yang membutuhkan 2 parameter. keduanya adalah callback function yang juga
dikenal sebagai handler. handler pertama adalah funsi yang akan dijalankan ketika promuse berstatus resolve.
handler kedua adalah funsgi yang akan dijalankan ketika promuse berstatus reject
 */
//ex
const stock = {
    coffeeBeans: 250,
    water: 1000
}
const checkStock =()=>{
    return new Promise((resolve, reject)=>{
        if(stock.coffeeBeans >=16 && stock.water >= 250){
            resolve("Stok cukup. Bisa membuat kopi");
        }else{
            reject("Tidak bisa membuat kopi");
        }
    });
}
//menangani statu resolve and reject
const handleSuccess = resolveValue =>{
    console.log(resolveValue);
}
const handleFailure = rejectionReason =>{
    console.log(rejectionReason);
}

//menangani hasil kembalian
checkStock().then(handleSuccess, handleFailure);
/**
//!BEDAH KODE
checkStock() fungsi yang mengembalikan promise dan akan menghasilkan resolve()
handleSucces() dan handleFailure() mencetak nilai dari parameternya.
.then() dari checkStock, isi paramter then() dengan dua fungsi handler yang telah dibuat 
*/