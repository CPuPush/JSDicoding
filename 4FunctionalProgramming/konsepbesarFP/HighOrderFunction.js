/**
 * High Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argument, mengembalikan sebuah funcgi aray bahkan keduanya
 * Teknik High-Order Function biasanya digunakan untuk:
 * 1. Mengabstraksikan atau mengisolasi sebuah aksi, event atau menangani alur asynchronous menggunakan callback,
 * promise, dall
 * 2. Membuat utilities yang dapat digunakan di berbagai tipe data.
 * 3. Membuat teknik currying atau function composition
*/
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {

  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    //check apakah array mempunyai element atau tidak, kalau tidak mengembalikan newArray kosong
    if(!item) return newArray;
    //rekursif
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}

const newNames = arrayMap(names, (name)=>`${name}`);

console.log({
    names,newNames
});