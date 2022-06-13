/**
 * array.map() merupakan fungsi bawaan dari array ayng sangat berguna dan banyak sekali digunakan
 * fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function
 */

//callback function dipanggil sebanyak jumlah panjang array dan akan memiliki akses pada index array sesuai dengan iterasinya
const newArray = ['harry', 'ron', 'Jeff', 'Thomas'].map((name)=>{return `${name}`});
console.log(newArray);