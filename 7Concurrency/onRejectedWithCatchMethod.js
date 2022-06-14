/**
salah satu cara menulis kode yang baik adalah mengikuti prinsip yang disebut separation of concerns 
atau pemisahan masalah. Pemisahan masalah berarti mengorganisasikan kode ke dalam bagian yang berbeda
berdasarkan tugas tertentu. hal ini akan memudahkan kita kelak mencari kode yamg salah jika aplikasi tidak bekerja
dengan baik.

perlu diketahui bahwa method .then() akan mengembalikan nilai promise yang sama dengan ketika objek promise
itu dipanggil. melalui sifatnya ini, daripada kita menetapkan logika resolve rejected 
pada satu method then(), kita dapat memisahkan kedua logika tersebut menggunakan masing masing method then()
 */
checkStock()
    .then(handleSuccess)
    .then(null, handleFailure);
/*
namun untuk menetapkan onRejected handler perlu memberikan nilai null pada parameter pertama.
solusi kita dapat menggunakan method lain, yakni .catch()

method .catch() mirip seperti .then() namun method ini hanya menerima 1 parameter function yang digunakan
untuk rejected handler. method catch() ini akan terpanggil ketika objek promise memiliki kondisi onRejected.

checkStock()
    .then(handleSuccess)
    .catch(handleFailure);
*/
//dengan catch() kita dapat menerapkan prinsip separation of concerns sekaligus membuat kodenya menjadi lebih rapi.