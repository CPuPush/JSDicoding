/**
 * 
 * //!asynchronous & event-driven
 * semua API dari Nodejs bersifat asynchronous, artinya tidak memblokir proses lain sembari mengunggu 1 proses
 * Server nodeJs akan melanjutkan ke pemanggilan API beriktnya lalu memanfaatkan mekanisme event norification untuk
 * mendapatkan respon dari panggilan API sebelumnya.
 * 
 * //!Very fast
 * eksekusi kode dengan node js sangat cepat karena berjalan pada V8 JavaScript Engines dari google chrome
 * 
 * //!single threaded but Highlu scalable
 * NodeJs menggunakan model songle thread dengan event looping. mekanisme ini membantu server untuk merespon secara asynchronous dan 
 * menjadikan server lebih scalable dibandingkan server tradisional yang menggunakan banyak thread untuk menangani permintaan.
 * 
 * node js dirancang untuk aplikasi dengan proses I/O yang intensif seperti network server atau backend API
 * pemrograman dengan multithreading relatif lebih berat dan lebih sulit dilakukan. jika ingi membuat webserver
 * yang bisa menangani ratusan request bersamaan, menggunakan thread akan membutuhkan memori yang besar. oleh karena itu
 * karakteristik node yang asynchronous dan single thread dirancang untuk memungkinkan implementasi server yang dapat menangani banyak
 * request pada waktu yang sama.
 */