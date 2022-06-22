/**
Jest merupakan salah satu framework testing paling populer untuk menuliskan kode pengujian pada bahasa pemrograman JS.
jest dapat digunakan untuk menuliskan script testing pada aplikasi backend maupun frontend
 */
// test('deskripsi dari testcase kamu',()=>{
//     expect(perintah).matcher('nilai yang di expektasikan')
// })
test('dua tambah dua adalah empat',()=>{
    expect(2+2).toBe(4);
});
/**
dari contoh kode di atas expect(2+2) merupakan segmen yang berisi perintah yang menghasilkan nilai balikan, perintah tersebut
dapat berupa fungsi ataupun perintah langsung.

toBe(4) disebut dengan matcher, berisi nilai yang diharapkan dari sebuah perintah yagn dilakukan sebelumnya.
Dalam jest sendiri terdapat berbagai matcher yang dalat digunakan, mis:
//*toBe(x)
bahwa nilai ekspektasi yanga diharrapkan adalah x
//*toEqual(x)
bahwa nilai ekspektasi yang diharapkan sama dengan x
//*toBeNull(x)
bahwa nilai ekspektasi yang diharapkan adalah null
//*toBeNull()
bahwa nilai ekspektasi yang diharapkan adalah null
//*toBeTruthy()
bahwa nilai ekspektasi yang diharapkan adalah truth
//*tobeFalsy()
bahwa nilai ekspektasi yang diharapkan adalah false
 */

//kita juga dapat menuliskan sebuah test secara grouping berdasarkan karaktersitik ataupun group yang sama menggunakan
//segmen describe, misalkan sebagai berikut:
describe('Pengujian olah aritmatika',()=>{
    test('#1 dua tambah dua adalah empat',()=>{
        expect(2+2).toBe(4);
    })
    test('#2 dua kali tiga adalah 6',()=>{
        expect(2*3).toBe(6);
    })
})
//buat folder __test__terlebih dahulu
//buat namafileYangDiTest.test.js

//run test dilakukan dengan
//!npm run test

//melihat laporan kode yang sudah terdapat pengujian dengan cara
//!npm run test -- --coverage
/*
setelah prosesnya selesai, jest akan secara otomatis men-generate laporan pengujian dalam folder coverage.
dalam folder tersebut terdapat
index.html(berisi laporan test secara keseluruhan(1 proyek))
fungsiDiTest.js.html berisi laporan test per kode pengujian
*/