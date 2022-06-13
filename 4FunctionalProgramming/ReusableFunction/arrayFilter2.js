/**
 * //!filter
 * merupakan fungsi bawaan dari data yang bertipe array di JS. berguna untuk melakukan proses penyaringan(filtering) terhadap nilai array yang ada
 * contoh kasus dimana ingin menghilangkan beberapa item di array berdasarkan spesifikasi tertentu.
 * 
 * callback function ini harus mengembalikan nilai boolean yang digunakan untuk mementukan apakah item array lolos saring
 * atau tidak
 */

const mahasiswa =[
    {
        name : 'abdul',
        score : '100',
        nim : '11S19001',
        major : 'Informatika'
    },
    {
        name : 'fori',
        score : '99',
        nim : '11S19002',
        major : 'Informatika'
    },
    {
        name : 'ikky',
        score : '98',
        nim : '11S19002',
        major : 'Informatika'
    },
    {
        name : 'modja',
        score : '10',
        nim : '11S19003',
        major : 'Informatika'
    },
]
//filter=> melakukan penyaringan object atas mahasiswa dengan score > 80
//map => menampilkan mahasiswa hanya nama dan score
const nameScore = mahasiswa.filter((user)=>(user.score>80)).map(user=>({name:user.name, score:user.score}));
console.log(nameScore);