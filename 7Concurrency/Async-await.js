/**
 * sejak ES8 (ECMAScript 2017) kita dapat menuliskan asynchronous proses layaknya synchronous prosess dengan bantuan keyword
 * //!async and await
 * 
 * fitur async/await sebenarnya hanya syntac sugar. itu berarti secara fungsionalitas bukanlah sebuah fitur baru dalam JS.
 * namun hanya gaya penulisan baru yang dikembangkan dari kombinasi pengaturan promise dan generator
 * sehingga async/await ini tidak dapat digunkaan jika tidak ada Promise
 */
//how to use
const getCoffee = ()=>{
    return new Promise((resolve, reject)=>{
        const seeds = 100;
        setTimeout(()=>{
            if(seeds >=10){
                resolve("Kopi didapatkan!")
            }else{
                reject("Biji kopi habis!")
            }
        }, 1000);
    });
};

//get value from getCoffee
const makeCoffee = () =>{
    getCoffee().then(coffee=>{
        console.log(coffee);
    })
}

makeCoffee();

//async-await memungkinkan kita menuliskan proses asynchronous layaknya proses synchronous.

function makeCOffee(){
    const coffee = getCoffee();
    console.log(coffee);
}
makeCOffee();
/**
 * hasil Promise{<pending>}
 *  ketika kode di atas dijalankan hasilnya tidak akan sesuai yang kita harapkan 
 * karena fungsi getCoffee() merupakan object Promise.
 * untuk menjalankan tambahkan keyword await sebelum pemanggilan fungsi promise
 */

async function makeCOFfee(){
    const coffee  = await getCoffee();
    console.log(coffee);
}
makeCOFfee();
/**
 * keyword async digunakan untuk memberitahu JS supaya menejalankan fungsi makeCoffee()
 * secara asynchronous. lalu keyword await digunakan untuk menghentikan proses pembacaan kode.
 * selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve
 */