/**
 * array.find() digunakan untuk mencari apakah didalam dereta nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan
 * pada callback function.
 * 
 * yang membedakan dengan array.some, find akan menghasilkan satu nilai dari element yang pertama ditemukan berdasarkan
 * kriterian tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuho pada item array
 * 
 * array.find(callback(element, [index], [array]), [thisArg]);
 * [...] => optional
 */
//contoh mencari siswa dengan nama james
 const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
const findJames = students.find(student=>student.name == 'James');
console.log(findJames);