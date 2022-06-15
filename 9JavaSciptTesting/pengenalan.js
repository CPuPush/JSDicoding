/*
sebelum sebuah program dipublikasikan, seharusnya sebuah program harus melalui tahap pengujian terlebih dahulu. 
Proses pengujian tersebut digunakan untuk melakukan kontrol kualitas dari kode yang kita tulis, 
memastikan bahwa software yang akan dipublikasikan ke pengguna minim adanya kecacatan atau bugs. 
Oleh sebab itu, sebagai seorang pemrogram kita harus melakukan testing saat proses pengembangan perangkat lunak.

testing dilakukan secara:
//?Manual
Proses pengujian secara manual oleh seorang yang ditunjuk sebagai test,
atau sebagian pengguna yang memang mendapatkan akses untuk pengujian pre-release.
proses ini biasanya berkaitan dengan usability, accessibility dari sebuah aplikasi.
//?Otomatis
Proses pengujian secara otomatis dilakukan oleh komputer dengan menuliskan script khusus,
biasanya dilakukan oleh software engineer langsung ataupun oleh seorang QA Engineer.
Proses ini biasanya berkaitan dengan fungsionalitas dari sebuah aplikasi

jenis jenis pengujian dan pengembangan perangkat lunak secara umum dapat dibagi menjadi 4 jenis pengujian:
- static test
memastikan tidak adanya type(naming convention yang standar) dan memastikan tidak ada error types

- unit test
dilakukan untuk memastikan bahwa setiap unit kode yang ditulis sudah bisa bekerja sesuai harapan,
Unit sendiri berarti komponen terkecil yang dapat diuji secara terisolasi dalam perangkat lunak yang kita buat, 
dapat berupa fungsi bahkan kelas jika kita menggunakan paradigma OOP. Proses ini juga dapat diautomasikan.

- Integration test
Memastikan beberapa serangkaian fungsi yang saling ketergantungan satu sama lain berjalan semestinya.
Proses pengujian ini dapat dilakukan secara diautomasikan dengan menuliskan script test.

--End-to-End test
Proses pengujian sebuah aplikasi untuk menguji flow dari awal hingga akhir, 
layaknya seorang user saat menggunakan aplikasi. Memastikan bahwasanya aplikasi berfungsi selayaknya. 
Biasanya proses ini dapat dilakukan secara otomatis maupun manual oleh tester.

Ketika kita menulis sebuah kasus pengujian (test case), 
maka ada beberapa poin yang harus kita definisikan terlebih dahulu:
//!apa yang ingin di uji
ex melakukan uji pada fungsi mengitung rata-rata nilai siswa, atau dapat juga melakukan pengujian pada proses registrasi akun, dll

//!Ekspektasi apa yang diharapkan
Untuk kasus menghitung nilai rata-rata:
Menghasilkan output perhitungan yang sesuai berdasarkan input yang diberikan.
    Input harus berupa angka.
    Untuk kasus proses registrasi akun:
Pengguna dapat melakukan registrasi secara normal.
    Pengguna dengan email sama tidak dapat melakukan registrasi.
    dan lain sebagainya.
*/