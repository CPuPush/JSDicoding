/**
 * Karakteristik dari blueprint yang kita buat harus sudah didefinisikan bersamaan dengan sebuah objek saat pertama kali di inisiasi.
 * constructor adalah sebuah method/function yang dijalankan pertama kali ketika object dibuat.
 */

//1
class yourClassName{
    constructor(one, two){
        this.ones = one;
        this.twos = two;
        console.log(`this is ${one} and this is ${two}`);
    }
}
const cl = new yourClassName('pertama', "kedua");
console.log(cl);

//2
function mail(acc, add){
    this.accs = acc;
    this.adds = add;
    console.log(`this is ${this.accs} and this is ${add}`);
}
const ml = new mail("adding", "accumulator");
console.log(ml);