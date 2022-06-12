/**
 * paradigma functional programming adalah paradigma pemrograman dimana proses komputasi didasarkan pada fungsi matematika murni.
 * 
 */
//penulisan kode imperatif=> dilakukan secara manual=>how to solve
const name  = ['harry', 'kiko', 'minutes'];
const newNames = [];

for(let i =0; i<name.length; i++){
    newNames.push(`${name[i]}`)
}
console.log(newNames);

//gaya deklaratif=>what to solve
const names = ["oke", "mantap", "kings"];
const nameNew = names.map((name) => `${name}`);
console.log(nameNew);