//if json didapat seperti berikut
const json = '{ "age": 23}'
try{
    let user = JSON.parse(json);

    if(!user.name){
        throw new SyntaxError(`'name' is require`);
    }
    console.log(user.name);
    console.log(user.age);
}catch(error){
    // console.log(error.name);
    // console.log(error.message);
    console.log(`JSON error : ${error.message}`);
}
/**
 * tidak akan ada error tetapi tidak adanya properti name pada json sebenarnya sama saja dengan error.
 * 
 * untuk mengatasi kita bisa menggunakan //!throw
 * operator ini melemparkan error pada program sehingga eksekusi kode akan masuk pada blok catch.
 * if(!user.name){
 *      throw new SyntaxError("'name' is required")
 * }
 */