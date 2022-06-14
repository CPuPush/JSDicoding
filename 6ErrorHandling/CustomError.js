/**
 * ketika mengembangkan suatu aplikasi akan ada banyak sekali kemungkinan munculnya error
 * seringkali kita membutuhkan kelas eror sendiri untuk menunjukkan kesalahan yang spesifik dan tidak
 * tersedia dalam kelas error bawaan dari JS
 */

/**
 * membuat kelas untuk menangani error sendiri dengan nama dan pesan yang lebih sesuai
 * kelas ini merupakan turunan dari kelas error yang sudah ada.
 * ex mengecek validasi data dari json
 */
 class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
 
let json = '{ "age": 30 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}

 //kita bisa membuat kelas error dengan nama dan pesan yang lebih sesuai.