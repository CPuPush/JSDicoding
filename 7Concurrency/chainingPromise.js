/*
//!Chaining Promise
Kita sudah tahu buruknya penulisan callback hell. Namun, kita tidak dapat menghindari 
keadaan di mana proses asynchronous saling bergantung satu sama lain.
Untuk menghindari callback hell, salah satu solusinya adalah Promise.

*/
//state

const state={
    stock:{
        coffeeBeans : 250,
        water : 1000,
    },
    isCoffeeMachineBusy:false
};
/**
 * pertama mesin mengecek status ketersediaan, jika mesin kopi tidak sibuk, maka promuse akan mengembalikan status
 * resolve("Mesin Kopi siap digunakan"). namun jika status mesin masih sibuk, maka akan dikembalikan adalah status 
 * reject("Maaf mesin sedang sibuk")
 */

//checkAvailability
const checkAvailability=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!state.isCoffeeMachineBusy){
                resolve("Mesin kopi siap digunakan");
            }else{
                reject("Maaf, mesin sedang sibuk");
            }
        }, 1000)
    });
}
//mesin kopi perlu memastikan bahwa stok biji kopi dan air cukup untuk membuat kopi.
// mengeubah statsu mesin kopi menjadi sibuk
const checkStock = ()=>{
    return new Promise((resolve, reject)=>{
        state.isCoffeeMachineBusy = true;
        // console.log(state);
        setTimeout(()=>{
            if(state.stock.coffeeBeans >= 16 && state.stock.water>=250){
                resolve("Stok cukup. Bisa membuat kopi.");
            }else{
                reject("Stok tidak cukup!");
            }
        },1500)
    });
}
//fungsi mencampur kopi dan iaru lalu menghidangkannya ke dalam gelas.
//fungsi ini mengembalikan promise dengan status resolve yang membawa nilai "Kopi sudah siap!"

const brewCoffee = () =>{
    console.log("Membuatkan Kopi anda ....");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Kopi sudah siap");
        },2000)
    })
}

function makeExpresso(){
    checkAvailability()
        .then((value)=>{
            console.log(value);
            return checkStock();
        })
    .then((value)=>{
        console.log(value);
        return brewCoffee();
    })
    .then((value)=>{
        console.log(value);
    })
    //catch menangkap semua reject reasoon tanpa harus membuat lagi then(handleFailure)
    .catch((rejectedReason)=>{
        console.log(rejectedReason);
    });
}
makeExpresso();
/*
???Untuk membuat espresso lakukan pengecekan ketersediaan mesin, kemudian periksa stok di dalam mesin, kemudian buat kopi.???

//?Apabila promise mengalami kegagalan (reject), ia akan ditangani oleh method catch() yang kita tuliskan di akhir. 
//?Entah itu disebabkan karena mesin kopi sedang sibuk atau stok bahannya habis.
 */
/**
 * //*Method .catch() mirip seperti .then(). Namun, method ini hanya menerima satu parameter 
 * //*function yang digunakan untuk rejected handler. Method catch() ini akan terpanggil 
 * //*ketika objek promise memiliki kondisi onRejected. Berikut contoh penggunaan method
 */