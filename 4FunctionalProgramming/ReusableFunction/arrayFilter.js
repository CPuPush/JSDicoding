/**
 * //!filter
 * merupakan fungsi bawaan dari data yang bertipe array di JS. berguna untuk melakukan proses penyaringan(filtering) terhadap nilai array yang ada
 * contoh kasus dimana ingin menghilangkan beberapa item di array berdasarkan spesifikasi tertentu.
 * 
 * callback function ini harus mengembalikan nilai boolean yang digunakan untuk mementukan apakah item array lolos saring
 * atau tidak
 */

//example ingin menghilangkan seluruh nilai falsy pada array
const exArray = [1, '', 0, 'foriokto', false, NaN, undefined];

const filterTruthyArray = exArray.filter((item)=> (Boolean(item)));
const filterFalsyArray = exArray.filter((item)=> (Boolean(item)==false));
console.log(filterTruthyArray);
console.log(filterFalsyArray);