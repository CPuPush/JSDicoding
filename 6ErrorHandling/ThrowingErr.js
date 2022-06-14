//json in string maka perlu di parse
let json = '{  "name": "Yoda", "age": 20 }';
 
try {
    //JSON.parse akan melakukan parsing atau konversi dari variable json(String) menjadi sebuah object
    let user = JSON.parse(json);
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

//jika json string tidak sesuai dengan format object JavaScipt
//Syntax error
//unexpected token b in JSON at position 2