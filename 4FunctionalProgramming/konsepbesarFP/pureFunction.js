/**
 * pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung
 * terhadap nilai yang berada di luar fungsi atau parameternya.
 * impure function artinya membutuhkan dan dipengaruhi oleh variable lain diluar functionnya
 */

const lingkaranLuas=(r)=>{
    return 3.14 * r * r;
}
console.log(lingkaranLuas(656));
//artinya tidak dipengaruhi oleh variable diluar function

/**
 * pure function juga dilarang untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja.
 * tidak bileh menimbulkan efek samping(no side effect)
 */
const createPersonAge=(age, person)=>{
    person.age = age;
    return person;
}
const persons = {
    name: 'bobo'
};
//fungsi ini membuat createPersonAge dengan parameter age dan object, dimana memanggil object persons.age 
//tetapi karena object person.age tidak ada maka sesuai dengan fungsi umum object, maka 
//ditambahkan secara otomatis didalam object persons.
const newPersons = createPersonAge(18, persons);

console.log({
    persons, newPersons
});
//{ persons: { name: 'bobo', age: 18 }, newPersons: { name: 'bobo', age: 18 } }
/**
 * createPersonWithAge bertujuan membuat objec baru dengan tambahan property age dari objek person
 * namum malah mengubah nilai dari objek lama. inilah menyebabkan fungsi createPersonWithAge bukan pure function
 */
// membuat menjadi purefunction dengan destructuring object

const createPersonWithAge = (age, person)=>{
    return{...person, age};
}
const person={
    name:'bobo'
}

const newPerson = createPersonWithAge(18, person);

console.log({person, newPerson});

/**
 * konsep pure Function
 * 1. mengembalikan nilai yang sama bila inputannya (nilai parameter ) sama
 * 2. Hanya bergantung pada argumen yang diberikan
 * 3. Tidak menimbulkan efek samping
 */