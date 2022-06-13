//module bekerja dengan cara exporting dan importing nilai,
//variable, fungsi, array, object atau class

//*module.exports untuk melakukan proses export module

//ex
const coffeeStock = {
    arabica:100,
    robusta:150,
    liberica:200
}
module.exports = coffeeStock;
console.log(module);//melihat nilai module pada berkas exportImport.js