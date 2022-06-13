/**
 * array.reduce()=> fungsi bawaan dari data yang bertipe array yang digunakan untuk mengeksekusi funsgi reducer pada setiap element
 * array yang hanya mengembalikan output satu nilai saja.
 * array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
 * [...] is optional
 */

/**
 * fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator,.
 * reduce juga mempunyai ilai awal yang dapat didefinisikan pada bagian initialValue
 */
//example menjumlahkan total nilai siswa
const mahasiswa = [
    {
        name : 'abdul',
        score : 100,
        nim : '11S19001',
        major : 'Informatika'
    },
    {
        name : 'fori',
        score : 99,
        nim : '11S19002',
        major : 'Informatika'
    },
    {
        name : 'ikky',
        score : 98,
        nim : '11S19002',
        major : 'Informatika'
    },
    {
        name : 'modja',
        score : 10,
        nim : '11S19003',
        major : 'Informatika'
    },
];

const totalScore = mahasiswa.reduce((acc, arr)=> acc + arr.score,0);
console.log(totalScore);