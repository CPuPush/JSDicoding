/**
 * array.every merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakan semua nilai dari sebuah array sesuai dengan kriteria
 * yang didefinisikan. kembalian berupa Boolean
 * arr.every(callback(element, [index], [array])
 */

//check apakah semua lulus test
const score = [90, 80, 66, 99];
console.log(score.every(arr=>arr>60));
