//jika kasus variable belum didefinisikan
let json = '{ "name": "Yoda", "age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    errorCode;
 
    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    if(error instanceof SyntaxError){
        console.log(`JSON Error: ${error.message}`);
    }else if(error instanceof ReferenceError){
        console.log(error.message);
    }else{
        console.log(error.stack);
    }
    
}
/**
 * Keluaran yang akan muncul is JSON Error: errorCode is not defined
 * error ditangani tetapi tetap menampilkan pesan JSON Error.
 * //!how to display error that correspondent to the error?
 * //*using if statement in catch error
 * 
 * operator instanceof, kita bisa mendapatkan tipe dari error yang terjadi. dari sana kita bisa membuat percabangan bagaimana cara
 * menangani error
 */