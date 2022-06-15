/*
npm init
ada 2 jenis instalasi package, local install dan global install

//?Local package 
akan dipasang di dalam direktori atau folder yang sama dengan project kita. 
Package ini akan diletakkan di dalam folder node_modules.

//?global package
dipasang di satu tempat pada sistem perangkat kita tergantung pengaturan pada saat instalasi node/cpm

//*install npm secara local
npm install <package-name>

//*install npm secara global
npm install -g <package-name>

//?Lodash adalah package memudahkan khususnya yang berhubungan dengan array, object, string, dll
npm install lodash

ada 2 tipe object depedencies dalam berkas package.json
yang pertama object dependencies dan yang kedua devDependencies

Object dependencies merupakan object yang menampung package yang kita gunakan untuk membuat aplikasi.
Object devDependencies digunakan untuk yang berkaitan hanya saat proses pengembangan aplikasi, contohnya seperti package jest
yang digunakan untuk testing. Package seperti jest ini hanya digunakan saat proses pengembangan aplikasi.
ia tidak digunakan lagi ketika aplikasi rilis atau digunakan langsung oleh pengguna

npm install <package-name> --save-dev

setelah pakage terpasang maka akan ditambahkan ke berkas package.json
"devDependencies": {
  "jest": "^26.6.3"
}

Berkas package-lock.json juga mendefinisikan versi package yang digunakan dengan lebih spesifik

Jika diperhatikan, pada file package.json kita menentukan versi dengan simbol caret (^). 
Selain caret, npm juga menggunakan simbol tilde (~). 
Keduanya digunakan untuk menentukan versi minor dan versi patch yang akan digunakan.

Jadi, jika kita melihat versi ~1.0.2 itu berarti npm dapat menginstal versi 1.0.2 atau versi patch terbaru seperti 1.0.4. 
Jika versi package dituliskan dengan caret seperti ^1.0.2, itu berarti npm dapat menginstall versi 1.0.2 
atau versi minor terbaru seperti 1.1.0.

file package-lock.json akan mendefinisikan secara spesifik mana versi yang akan digunakan
"dependencies": {
  "lodash": {
    //*"version": "4.17.21",
    "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
    "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
  }
}


*/