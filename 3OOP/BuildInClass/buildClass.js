/**
 * dlm javascript terdapat buildin class bawaan [date, object, array, math, dan string]
 * 
 */
//tanpa parameter, berarti berisi tanggal saat ini 
const myDate = new Date();
console.log(myDate);

// const myDates = new Date(dateString);
// const myDates = new Date(miliseconds);
// console.log(myDates);

//parameter tanggal dalam bentuk number 7 param[hour, minute, second, millisecond] optional
// const mydates = new Date(year, month, date, hour, minute, second, millisecond);

/**
 * Dalam object date terdapat beberapa method yang dapat kita gunakan:
 * 
 * 1. getMonth()=> bulan bentuk angka 0-11 
 */
console.log(myDate.getMonth());
/**
 * 2. getFullYear()=> angka
 * 3. getDate() => tanggal 1 - 31
 * 4. get Hours()=> 0-23
 * 5. getMinutes()=> 0-59
 * 6. getSeconds()=>0-59
 * 7. getMilliseconds()-> 0-59
 * 8. getTime()=> waktu dalam epoch milli-detik(1januari, 1970 yang berarti 0)
 * 9. getDay()=> 0-6
 */
//terdapat static method yang dapat digunakan tanpa melakukan instansiasi
/**
 * parse(datestring)=> mengubah  tanggal dalam format string, menjadi epoch miliseconds=>Date.parse("2021-01-01")
 * UTC(year, [..param])=> mengubah tanggal dalam format integer/number menjadi epoch milisenconds=>Date.UTC(2021, 01, 01);'
 */
// date String format
/**
 * YYYY=> tahum
 * MM=> digit bulan
 * DD=> tanggal
 * HH=>digit jam
 * mm=>digit menit
 * ss=>digit detik
 * sss->diti millidetik
 * - => pemisah tanggal
 * : => pemisahh waktu
 * Z => berarti tanggal akan diatur sebagai UTC
 */
//!EPOCH DIMULAI DARI 1 Januari 1970