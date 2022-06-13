const coffeeStock = require('./exportImport');

//jika ingin menggunakan destructuring object, patikan penamaan variable local sama dengan properti objectnya, if tidak, maka undefined
const {coffee, isCoffeeMachineReady} = require('./exportBeberapaNilai');

const makeCoffee = (type, miligrams)=>{
    if(coffeeStock[type] >= miligrams){
        console.log("Kopi berhasil dibuat!");
    }else{
        console.log("Biji kopi habis!");
    }
}
makeCoffee("arabica", 1000);
console.log(coffee);
console.log(isCoffeeMachineReady);