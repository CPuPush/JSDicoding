/**
 * array.sort() berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. secara default sort mengubah nilai 
 * dalam deretan menjadi bentuk string dan mengurutkannya secara ascending
 * arr.sort([compareFunction])
 *  [...] adalah opsional parameter
 */

const months = ['march', 'jan', 'feb', 'Dec'];
console.log(months.sort());

const array1 = [1,2,3,5,3,2,4,5,6,7,8,23,23,432,2,5,423];
console.log(array1.sort((a, b)=> a-b) );

