const isRaining = true ; 
//const isRaining = false; const cannot declarated again

console.log("Persiapan sebelum berangkat kegiatan");
if(isRaining){
    console.log("Hari ini hujan, jangan berangkat");
}

let x = 50

if(x > 70){
    console.log(x);
}else{
    console.log("nilai kurang dari 70");
}

/**pengecekan kondisi sekaligus */
let language = "French";
let greeting = "selamat pagi"

if(language === "English"){
    greeting = "good morning";
}
else if(language === "French"){
    greeting = "Bonjour";   
}
else if(language === batak){
    greeting = "horas boh";
}
console.log(greeting);